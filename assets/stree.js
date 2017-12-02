/**
 * Created by shawn on 2017/7/6.
 */

function SimpleTreeView(data, options)
{
    this.data = data;
    this.options = {};
    options = options || {};
    this.options.indentunit = options.indentunit || 'rem';
    this.options.baseindent = options.baseindent || 1;
    this.options.skecolor = options.skecolor || 'red';
    this.options.skelinewidth = options.skelinewidth || '2px';
    this.options.eleheight = options.eleheight || 2;
    this.options.rootclasses = options.rootclasses || 'stree-root';
    this.options.nodeclasses = options.nodeclasses || 'stree-node';

    return this;
};

SimpleTreeView.prototype.toHTML = function toHTML()
{
    var root = $('<div>').addClass(this.options.rootclasses);
    const tvops = this.options;

    function genOneLevel(data, pathinfo)
    {
        if (!_.isObject(data)) {
            data = {[data] : null};
        }
        const titles = _.keys(data);
        const indent = pathinfo.length;
        for (let title_idx in titles) {
            let title = titles[title_idx];
            let row = $('<div>').appendTo(root);
            if (indent > 1) {
                let lparentnum = 0;
                for (let i = 1; i < indent; ++i) {
                    if (pathinfo[i]) {
                        row.append($('<span>').css("margin-left", (lparentnum * 2 + 1) * tvops.baseindent + tvops.indentunit));
                        row.append($('<span>').css({
                            "height": tvops.eleheight + tvops.indentunit,
                            "width": tvops.baseindent + tvops.indentunit,
                            "border" : "none",
                            "border-left": "solid " + tvops.skecolor
                        }));
                        lparentnum = 0;
                    } else {
                        ++lparentnum;
                    }
                }
            }

            if (pathinfo[indent-1]) {
                let skeblock = $('<div>').css({
                    "height": tvops.eleheight + tvops.indentunit,
                    "width": tvops.baseindent + tvops.indentunit,
                    "display": "inline-block"
                });

                row.append(skeblock.clone()).append(skeblock);

                (skeblock
                    .append($('<div>').css({
                        "border-left": "solid " + tvops.skecolor,
                        "border-bottom": "solid " + tvops.skecolor,
                        "height": tvops.eleheight / 2 + tvops.indentunit,
                        "width": tvops.baseindent + tvops.indentunit
                    }))
                    .append($('<div>').css({
                        "height": tvops.eleheight / 2 + tvops.indentunit,
                        "width": tvops.baseindent + tvops.indentunit
                    }))
                );
            } else {
                let skeblock = $('<div>').css({
                    "height": tvops.eleheight + tvops.indentunit,
                    "width": tvops.baseindent + tvops.indentunit,
                    "display": "inline-block"
                });
                row.append(skeblock.clone()).append(skeblock);

                (skeblock
                        .append($('<div>').css({
                            "border-left": "solid " + tvops.skecolor,
                            "border-bottom": "solid " + tvops.skecolor,
                            "height": tvops.eleheight / 2 + tvops.indentunit,
                            "width": tvops.baseindent + tvops.indentunit
                        }))
                        .append($('<div>').css({
                            "border-left": "solid " + tvops.skecolor,
                            "height": tvops.eleheight / 2 + tvops.indentunit,
                            "width": tvops.baseindent + tvops.indentunit
                        }))
                );
            }

            let content = $('<div>')
                .css('display', 'inline-block')
                .addClass(tvops.nodeclasses)
                .text(title);
            row.append(content);

            if (data[title] !== null) {
                let next_pathinfo = pathinfo.slice();
                next_pathinfo.push((title_idx == titles.length - 1));
                genOneLevel(data[title], next_pathinfo);
            }
        }
    }

    genOneLevel(this.data, [1]);

    return root;
}

SimpleTreeView.prototype.printHTML = function printHTML()
{
    $('#container').html(this.toHTML2());
    refreshHTMLHighlight();
}

SimpleTreeView.prototype.toHTML2 = function toHTML2()
{
    let tvops = this.options;
    let h = tvops.eleheight / 2, w = tvops.baseindent;
    let u = tvops.indentunit;

    function appendEmptyBlock(row, blocksize) {
        let block = $('<div>').css({
            "height": h * 2 + u,
            "width": (w * 2) * blocksize + u,
            "display": "flex"
        });
        row.append(block);
        return block;
    }

    function appendStraightBlock(row) {
        let block = appendEmptyBlock(row, 1);
        let subblock = $('<div>').css({
            "height": h * 2 + u,
            "width": w + u,
            "display": "flex"
        });
        block.append(subblock.clone()).append(subblock);
        subblock.css('border-left', 'solid ' + tvops.skecolor);
        return block;
    }

    function appendLastBlock(row) {
        let block = appendEmptyBlock(row, 1);
        let subblock = $('<div>').css({
            "height": h * 2 + u,
            "width": w + u,
            "display": "flex"
        });
        let subblock_withcolor = subblock.clone();
        subblock_withcolor.append(
            $('<div>').css({
                'border-left': 'solid ' + tvops.skecolor,
                'border-bottom': 'solid ' + tvops.skecolor,
                'position': 'absolute',
                'top': 0
            }));
        return block.append(subblock).append(subblock_withcolor);
    }

    function appendContinueBlock(row) {
        console.log("continue bk");
        let block = appendEmptyBlock(row, 1);
        let subblock = $('<div>').css({
            "height": h * 2 + u,
            "width": w + u,
            "display": "flex"
        });
        let subblock_withcolor = subblock.clone().css('border-left', 'solid ' + tvops.skecolor);
        subblock_withcolor.append(
            $('<div>').css({
                "height": h + u,
                "width": w + u,
                'border-bottom': 'solid ' + tvops.skecolor,
                'position': 'relative',
                'top': 0
            }));
        return block.append(subblock).append(subblock_withcolor);
    }

    function appendContentBlock(row, content) {
        return $('<div>')
            .addClass(tvops.nodeclasses)
            .css({
                'display': 'flex',
                'align-items': 'center'
            })
            .html(content)/*.appendTo($('<div>').css({
                'display': 'inline-block',
                'height': h * 2 + u,
                'width': w + u
            })*/.appendTo(row)/*)*/;
    }

    function genOneLevelBlocks(data, pathinfo) {
        if (!_.isObject(data)) {
            data = {[data]: null};
        }

        let titles = _.keys(data);
        let cur_pathinfo = pathinfo.slice()
        cur_pathinfo.push(0); // by default 'continue'
        for (let tid in titles) {
            let title = titles[tid];
            let row = $('<div>').css('display', 'flex').appendTo(root);
            let emp_num = 0;
            cur_pathinfo[cur_pathinfo.length-1] = !(tid === titles.length-1);
            for (let piid in cur_pathinfo) {
                let pi = cur_pathinfo[piid]; // continue bid
                console.log("piid", piid, typeof piid, pi, cur_pathinfo.length, title);
                if (pi) {
                    if (emp_num) {
                        appendEmptyBlock(row, emp_num);
                        emp_num = 0;
                    }

                    if (piid == cur_pathinfo.length-1) {
                        // myself
                        appendContinueBlock(row);
                    } else {
                        appendStraightBlock(row);
                    }
                } else {
                    if (piid == cur_pathinfo.length-1) {
                        appendLastBlock(row);
                    } else {
                        ++emp_num;
                    }
                }
            }

            appendContentBlock(row, title);
            if (!_.isNull(data[title]) && !_.isUndefined(data[title])) {
                genOneLevelBlocks(data[title], cur_pathinfo);
            }
        }
    }

    let root = $('<div>').addClass(tvops.rootclasses).append($('<span>Root</span>'));
    genOneLevelBlocks(this.data, []);
    return root;
}


