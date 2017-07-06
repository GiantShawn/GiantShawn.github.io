---
layout: page
title: Bootstrap
date: 2017-06-24 15:42:00 +0008
bootstrap_support: true
---

Bootstrap.js
============
<h4> Table of Contents </h4>
* this ordered seed list will be replaced by toc as unordered list
{:toc}

通用规范
----
关于Bootstrap的基本使用方法和接口规范，可以参考这篇[博文]({% link _posts/2017-06-14-bootstrap-layout.md %})

布局
---
布局管理的作用是把Bootstrap提供的各种控件按照开发者定义的位置排列规则以及具体显示
屏幕尺寸自适应规则在Container里面排列好。Container是一个带.container的HTML tag，
定义一个bootstrap布局的边界。.container可以嵌套，提供方便的实现清晰条理的框架性布局。

Bootstrap的布局全面采用了CSS3的flexbox功能。但是Bootstrap在flexbox之上定义了一层
自己的布局样式，完全隐藏了具体的flexbox实现细节，从而使得项目更巨跨浏览器的兼容性。

开发者可以使用所谓breakpoint在指定控件大小和相对位置的同时，告诉Bootstrap该布局在不同
显示大小情况下应该如何变化。号称mobile first的Bootstrap库正式通过breakpoint实现
responsive layout的。

有关更多更仔细的Bootstrap例子，我也写了一篇[博文]({% link _posts/2017-06-20-bootstrap-layout-example.html %})

Alert
-----
<div class="highlight-html">
    <div class="alert alert-success" role="alert">
      <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
    </div>

    <div class="alert alert-info" role="alert">
      <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
    </div>
    <div class="alert alert-warning" role="alert">
      <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
    </div>
    <div class="alert alert-danger" role="alert">
      <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
    </div>

    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
</div>

基本使用方法就是用alert class创建一个alert条，用alert-success/alert-info/alert-warning/alert-danger指定alert条的样式。
另外，为了帮助某些辅助性技术如screen reader识别出元素的role，可以包含role的attribute。

上面最后一个例子说明alert里面可以包含段落标签。

### 可关闭Alert Bar
两种方式把一个Alert初始化为“可关闭”：
1. 调用`$('.alert').alert()`: Makes an alert listen for click events on
descendant elements which have the data-dismiss="alert" attribute. (Not necessary when using the data-api’s auto-initialization.)
2. 添加alert-dismissible到alert元素的class列表（data-xxx attribute被bootstrap用来自动初始化很多功能）。

两种方法关闭一个“可关闭”Alert Bar：
1. 调用`$('.alert').alert('close')`: 可以搭配.fade和.show class打开渐隐效果。关于.show和.fade的含义，可参考Nav Tab的渐隐介绍。
2. 在Alert Bar里面添加一个包含`data-dismiss="alert"`的Button。点击该button的时候就会关闭containing alert bar。

### Alert的Event
`close.bs.alert`, `closed.bs.alert`
[Alert Event](https://v4-alpha.getbootstrap.com/components/alerts/#events)


Badge
-----
Badge的基本用法类似Alert Bar。
<div class="highlight-html">
    <span class="badge badge-default">Default</span>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-info">Info</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-danger">Danger</span>
</div>

.badge-pill可以创建有border-radius的badge控件。
<div class="highlight-html">
    <span class="badge badge-pill badge-default">Default</span>
    <span class="badge badge-pill badge-primary">Primary</span>
    <span class="badge badge-pill badge-success">Success</span>
    <span class="badge badge-pill badge-info">Info</span>
    <span class="badge badge-pill badge-warning">Warning</span>
    <span class="badge badge-pill badge-danger">Danger</span>
</div>

Breadcrumb
----------
路径控件。研究一下下面的例子即可。
<div class="highlight-html">
<ol class="breadcrumb">
  <li class="breadcrumb-item active">Home</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active">Library</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active">Data</li>
</ol>
</div>

这个控件不仅仅支持列表元素，普通的div和nav都支持。请看下面来自官网的例子。
<div class="highlight-html">
    <nav class="breadcrumb">
      <a class="breadcrumb-item" href="#">Home</a>
      <a class="breadcrumb-item" href="#">Library</a>
      <a class="breadcrumb-item" href="#">Data</a>
      <span class="breadcrumb-item active">Bootstrap</span>
    </nav>
</div>

Button
------
### 基本Style
<div class="highlight-html2">
    <h5 style="color:lightblue">Double click to see code</h5>
    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-primary">Primary</button>

    <!-- Secondary, outline button -->
    <button type="button" class="btn btn-secondary">Secondary</button>

    <!-- Indicates a successful or positive action -->
    <button type="button" class="btn btn-success">Success</button>

    <!-- Contextual button for informational alert messages -->
    <button type="button" class="btn btn-info">Info</button>

    <!-- Indicates caution should be taken with this action -->
    <button type="button" class="btn btn-warning">Warning</button>

    <!-- Indicates a dangerous or potentially negative action -->
    <button type="button" class="btn btn-danger">Danger</button>

    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
    <button type="button" class="btn btn-link">Link</button>
</div>

.btn也可以用在`<a>`和`<input>`标签里：

<div class="highlight-html2">
    <h5 style="color:lightblue">Double click to see code</h5>
    <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input">
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Reset">
</div>

### 大小 (btn-lg/btn-sm)
<div class="highlight-html2">
    <h5 style="color:lightblue">Double click to see code</h5>
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
</div>

### 块按钮（block level button）
块按钮就是被按照block方式编排的按钮，默认会横向充满可显示区域。

<div class="highlight-html2">
    <h5 style="color:lightblue">Double click to see code</h5>
    <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
</div>


### 强制打开Active状态
Bootstrap基本按钮有有四中种状态：normal(non-active)、active、focus、disabled。在PC上，把鼠标移动到按钮处，
按钮会自动进入active状态（其实我理解就是hover），移出来后回到normal，点击按钮会进入focus
和active态，这时候再挪开鼠标会回到focus&non-active态。注意，focus一旦获得，便只能通过
点击其他空间去掉focus态。

可以直接添加或者通过javascript添加.active的方法强制button获得active时的样式。
`aria-pressed="true"`是辅助阅读技术用来获得控件状态的（如果没用可以去掉）

<div class="highlight-html2">
    <h5 style="color:lightblue">Double click to see code</h5>
    <a href="javascript:void(0)" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
    <a id="flash-active-button" href="javascript:void(0)" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
    <script type="application/javascript">
        var btn = $("#flash-active-button");
        if (btn.length) {
            setInterval(function() {
                btn.toggleClass('active');
            }, 1000); // one second
        }
    </script>
</div>

### disable按钮
类似active状态，disable按钮的例子如下。
<div class="highlight-html2">
    <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
    <h5>&lt;a&gt;标签不支持disabled attribute，可以使用.disable</h5>
    <a type="button" class="btn btn-lg btn-primary disabled">Primary button</a>
    <a type="button" class="btn btn-secondary btn-lg disabled">Button</a>
</div>


### 二相按钮（切换active和non-active）
添加`data-toggle="button"`到button元素可以让该按钮转变为二相按钮。点击之后会一直停留在
active态，再次点击就返回non-active(normal)。由此看来active状态就是bootstrap的按钮
选中状态。

在js层面，可以通过`$().button('toggle')`来toggle active状态。

<div class="highlight-html2">
    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
      Single toggle
    </button>
</div>


### Checkbox
三个步骤创建checkbox：
1. 给容器标上.btn-group和`data-toggle="buttons"`
2. 在里面添加label和input(type="checkbox")，点击事件会发生在input元素上
3. 如果你需要用javascript点击按钮，则相应地需要手动给label加上.active。

<div class="highlight-html2">
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-primary active">
        <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
      </label>
      <label class="btn btn-primary">
        <input type="checkbox" autocomplete="off"> Checkbox 2
      </label>
      <label class="btn btn-primary">
        <input type="checkbox" autocomplete="off"> Checkbox 3
      </label>
    </div>
</div>
<div class="highlight-html2">
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-primary active">
        <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
      </label>
      <label class="btn btn-primary">
        <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
      </label>
      <label class="btn btn-primary">
        <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
      </label>
    </div>
</div>



Button Group
------------
Learn by example. 需要注意的是，button group 是可以嵌套的，具体可以看下面Drop-down menu的例子二。
<div class="highlight-html2">
    <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group mr-2 btn-toolbar-sizesm" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary">4</button>
      </div>
      <div class="input-group">
        <span class="input-group-addon" id="btnGroupAddon">@</span>
        <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon">
      </div>
    </div>

    <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group btn-toolbar-sizelg" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary">4</button>
      </div>
      <div class="input-group">
        <span class="input-group-addon" id="btnGroupAddon2">@</span>
        <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2">
      </div>
    </div>

    <script type="application/javascript">
    for (var sz of ['lg', 'sm']) {
            (function (sz) {
                var clsname = '.btn-toolbar-size' + sz;
                var btnbar = $(clsname);
                if (btnbar.length) {
                    setInterval(function() {
                        btnbar.toggleClass('btn-group-' + sz); // .btn-group-{lg/sm} for group size
                    }, 2000);
                }
             })(sz);
     }
    </script>
</div>

创建vertical button group可以用`.btn-group-vertical`
<div class="highlight-html2">
  <div class="btn-group-vertical mr-2" role="group" aria-label="Vertical group">
    <button type="button" class="btn btn-secondary">vertical 1</button>
    <button type="button" class="btn btn-secondary">vertical 2</button>
    <button type="button" class="btn btn-secondary">vertical 3</button>
    <div class="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        vertical 4(dropdown)
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a class="dropdown-item" href="#">Dropdown link</a>
        <a class="dropdown-item" href="#">Dropdown link</a>
      </div>
    </div>
    <button type="button" class="btn btn-secondary">vertical 5</button>
  </div>
</div>


### Drop-down menu
<div class="highlight-html2">
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
</div>

<div class="highlight-html2">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button type="button" class="btn btn-secondary">1</button>
      <button type="button" class="btn btn-secondary">2</button>

      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a class="dropdown-item" href="#">Dropdown link</a>
          <a class="dropdown-item" href="#">Dropdown link</a>
        </div>
      </div>
    </div>
</div>



Dropdowns(下拉菜单)
---------------
Wrap the dropdown’s toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position: relative;
例子
<div class="highlight-html2">
    <div class="dropdown d-inline-block">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <h6 class="dropdown-header">Dropdown header</h6>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>

    <!-- Example split danger button -->
    <div class="btn-group">
      <button type="button" class="btn btn-danger">Action</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item disabled" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
</div>

<div class="highlight-html2">
    <!-- Large button groups (default and split) -->
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Large button
      </button>
      <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Large button Split
      </button>
      <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
</div>

<div class="highlight-html2">

    <!-- Small button groups (default and split) -->
    <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Small button
      </button>
      <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Small button
      </button>
      <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
</div>

#### 向上的menu。
<div class="highlight-html2">
    <!-- Default dropup button -->
    <div class="btn-group dropup">
      <button type="button" class="btn btn-secondary">Dropup</button>
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>

    <!-- Split dropup button -->
    <div class="btn-group dropup">
      <button type="button" class="btn btn-secondary">
        Split dropup
      </button>
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
</div>

#### Menu的item可以用button元素
<div class="highlight-html2">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
</div>

#### 有关移动设备上要注意的
On mobile devices, opening a dropdown adds a .dropdown-backdrop as a
tap area for closing dropdown menus when tapping outside the menu, a
requirement for proper iOS support. This means that switching from an
open dropdown menu to a different dropdown menu requires an extra tap on mobile.

#### Javascript来控制Dropdown
[官方文档](https://v4-alpha.getbootstrap.com/components/dropdowns/#via-javascript)

Collapse
--------
例子
<div class="highlight-html2">
    <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
</div>

<div class="highlight-html2">
    <div id="accordion" role="tablist" aria-multiselectable="true">
      <div class="card">
        <div class="card-header" role="tab" id="headingOne">
          <h5 class="mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #1
            </a>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
          <div class="card-block">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingTwo">
          <h5 class="mb-0">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Collapsible Group Item #2
            </a>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
          <div class="card-block">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingThree">
          <h5 class="mb-0">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Collapsible Group Item #3
            </a>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
          <div class="card-block">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
</div>
Input Group
-----------
你可以在form中的input控件左右两边添加类似下面例子的addon。
<div class="highlight-html2">
    <form>
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
        <br>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
          <span class="input-group-addon" id="basic-addon2">@example.com</span>
        </div>
        <br>
        <label for="basic-url">Your vanity URL</label>
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon3">https://example.com/users/</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <br>
        <div class="input-group">
          <span class="input-group-addon">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-addon">.00</span>
        </div>
        <br>
        <div class="input-group">
          <span class="input-group-addon">$</span>
          <span class="input-group-addon">0.00</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        </div>
    </form>
</div>

### 大小
<div class="highlight-html2">
    <form>
        <div class="input-group input-group-lg">
          <span class="input-group-addon" id="sizing-addon1">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1">
        </div>
        <br>
        <div class="input-group">
          <span class="input-group-addon" id="sizing-addon2">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
        </div>
    </form>
</div>

### Checkbox/Button
<div class="highlight-html2">
    <div class='container'>
        <div class="row">
          <div class="col-lg-6">
            <div class="input-group">
              <span class="input-group-addon">
                <input type="checkbox" aria-label="Checkbox for following text input">
              </span>
              <input type="text" class="form-control" aria-label="Text input with checkbox">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-group">
              <span class="input-group-addon">
                <input type="radio" aria-label="Radio button for following text input">
              </span>
              <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
          </div>
        </div>
    </div>
</div>

<div class="highlight-html2">
    <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="input-group">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
              <input type="text" class="form-control" placeholder="Search for...">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-lg-offset-3 col-lg-6">
            <div class="input-group">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Hate it</button>
              </span>
              <input type="text" class="form-control" placeholder="Product name">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Love it</button>
              </span>
            </div>
          </div>
        </div>
    </div>
</div>

<div class="highlight-html2">
    <div class="constainer">
    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
          <button type="button" class="btn btn-secondary">Action</button>
          <div class="input-group-btn">
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
          <div class="input-group-btn">
            <button type="button" class="btn btn-secondary">Action</button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</div>


Popover控件
---------
看例子，具体的使用请看[官网文档](https://v4-alpha.getbootstrap.com/components/popovers/)。
需要注意的是Popover由于性能考虑默认是不启用的，如果需要启用，需要执行下面代码：
{% highlight javascript %}
$(function () {
  $('[data-toggle="popover"]').popover()
})
{% endhighlight %}

<div class="highlight-html2">
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>

    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on right
    </button>

    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on bottom
    </button>

    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on left
    </button>

    <button type="button" class="btn btn-primary" onclick="$('[data-toggle=\'popover\']').popover();">
        Click to enable popover
    </button>
</div>

使用focus trigger实现点击屏幕空白处关闭popover的功能(dismiss-on-next-click)。
这个功能必须使用a标签。
<div class="highlight-html2">
    <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
</div>

或者执行下面代码。
{% highlight javascript %}
$('.popover-dismiss').popover({
  trigger: 'focus'
})
{% endhighlight %}

Tootips
-------
和Popovers非常像，是根据鼠标位置自动显示和隐藏的Popovers。使用注意事项跟Popovers相同。

<div class="highlight-html2">
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
      Tooltip on top
    </button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
      Tooltip on right
    </button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
      Tooltip on bottom
    </button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
      Tooltip on left
    </button>

    <button type="button" class="btn btn-primary" onclick="$('[data-toggle=\'tooltip\']').tooltip();">
        Click to enable Tooltips
    </button>
</div>

### Tooltips的内容可以是html
<div class="highlight-html2">
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
      Tooltip with HTML
    </button>
</div>

List Group
----------
看例子。
<div class="highlight-html2">
    <ul class="list-group">
      <li class="list-group-item disabled">Cras justo odio</li>
      <li class="list-group-item active">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
</div>


### 使用Button或者a作为条目
可以增加点击逻辑，不过需要添加.list-group-item-action。
<div class="highlight-html2">
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">Active Link1</a>
      <a href="#" class="list-group-item list-group-item-action">Link2</a>
      <a href="#" class="list-group-item list-group-item-action">Link3</a>
      <a href="#" class="list-group-item list-group-item-action disabled">Disabled Link4</a>
      <button type="button" class="list-group-item list-group-item-action">Button1</button>
      <button type="button" class="list-group-item list-group-item-action active">Active Button2</button>
      <button type="button" class="list-group-item list-group-item-action" disabled>Disabled Button3</button>
    </div>
</div>


<div class="highlight-html2">
    <ul class="list-group">
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
      <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
      <li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
      <li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
    </ul>
</div>

### 包含Badges
<div class="highlight-html2">
    <ul class="list-group">
      <li class="list-group-item justify-content-between">
        Cras justo odio
        <span class="badge badge-default badge-pill">14</span>
      </li>
      <li class="list-group-item justify-content-between">
        Dapibus ac facilisis in
        <span class="badge badge-warning badge-pill">2</span>
      </li>
      <li class="list-group-item justify-content-between">
        Morbi leo risus
        <span class="badge badge-success badge-pill">1</span>
      </li>
    </ul>
</div>

### 列表元素几乎可以包含任意元素
<div class="highlight-html2">
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
    </div>
</div>

导航(nav)
-------
下面是两种创建导航栏的方法。两种方法的效果完全一样（除了写法不一样）
<div class="highlight-html2">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
</div>
<div class="highlight-html2">
<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
</div>


### 对齐
<div class="highlight-html2">
<h4 class="text-center">Justify content center</h4>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
</div>

### 纵向nav（.flex-column/.flex-{xs,sm,md,lg,xl}-column）
<div class="highlight-html2">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
</div>

### Tab
用.nav-tabs创建nav tabs，用.active指定活跃tab页，包括.nav-link和.tab-pane，其中最重要的是tab-pane的.active。
<div class="highlight-html2">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
      </li>
      <li class="nav-item" id="myTab" >
        <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="home" role="tabpanel">Home Pane</div>
      <div class="tab-pane" id="profile" role="tabpanel">Profile Pane</div>
      <div class="tab-pane" id="messages" role="tabpanel">Messages Pane</div>
      <div class="tab-pane" id="settings" role="tabpanel">Settings Pane</div>
    </div>
</div>

当然可以通过javascript来触发tab切换，只要模拟一次tab即可。 这个tab函数会在tab pane被最终显示
之前返回，也就是说shawn.bs.tab事件还没触发。
{% highlight javascript %}
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
{% endhighlight %}

<div class="highlight-html2">
    <button id="gotoPane3" class="btn btn-success">跳到第三Pane</button>
    <script type="application/javascript">
        $('#gotoPane3').click(function (e) {
            $('#myTab a').tab('show');
        });
    </script>
</div>


### 淡出式切换
To make tabs fade in, add .fade to each .tab-pane. The first tab pane must also have .show to make the initial content visible.
<div class="highlight-html2">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#fadehome" role="tab">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#fadeprofile" role="tab">Profile</a>
      </li>
      <li class="nav-item" id="myTab" >
        <a class="nav-link" data-toggle="tab" href="#fademessages" role="tab">Messages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#fadesettings" role="tab">Settings</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="fadehome" role="tabpanel">Fade Ex.1</div>
      <div class="tab-pane fade" id="fadeprofile" role="tabpanel">Fade Ex.2</div>
      <div class="tab-pane fade" id="fademessages" role="tabpanel">Fade Ex.3</div>
      <div class="tab-pane fade" id="fadesettings" role="tabpanel">Fade Ex.4</div>
    </div>
</div>

### 关于Nav的事件
点击tab切换tab pane的时候，下面的事件会顺序触发：
1. hide.bs.tab (on the current active tab)
2. show.bs.tab (on the to-be-shown tab)
3. hidden.bs.tab (on the previous active tab, the same one as for the hide.bs.tab event)
4. shown.bs.tab (on the newly-active just-shown tab, the same one as for the show.bs.tab event)

更详细的解析参考[官方文档](https://v4-alpha.getbootstrap.com/components/navs/#events)
{% highlight javascript %}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
{% endhighlight %}

分页控件
----
分页按钮可以是a标签或者button， 但要注意的是如果是a标签，disable态除了需要添加.disabled
外还需要在a标签上添加`tabindex="-1"`，当然你也可以直接把a标签替换成span来禁止点击行为。

<div class="highlight-html2">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">1(disabled)</a></li>
        <li class="page-item active"><a class="page-link" href="#">2(active)</a></li>
        <li class="page-item"><a class="page-link" href="#">3(normal)</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
</div>

### 控件大小
`.pagination-lg`, `.pagination-sm`



进度条
---
<div class="highlight-html2">
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 25%; height: 1px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
    <div style="height:1em"></div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 50%; height: 20px;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
    </div>
</div>


<div class="highlight-html2">
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

<div class="highlight-html2">
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

<div class="highlight-html2">
    <div class="progress">
      <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

### 进度条的动画效果
<div class="highlight-html2">
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
    </div>
</div>

Navbar导航栏（统称，不仅可以包含nav，还可以包含button、text、brand、icon等）
----------------------------------------------------
如果希望Navbar具有responsive collapsing的行为，就要把.navbar-toggleable-*也添加到Navbars(.navbar)中。

Navbars require a wrapping .navbar with .navbar-toggleable-* for responsive collapsing and color scheme classes.
* .navbar-brand for your company, product, or project name.
* .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
* .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
* .form-inline for any form controls and actions.
* .navbar-text for adding vertically centered strings of text.
* .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.

<div class="highlight-html2">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded" id="stdnavbarexample">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
</div>

### Color Schemes
<div class="highlight-html2" id = "navbarcolorschemes">
    <nav class="navbar navbar-inverse bg-inverse">
      <!-- Navbar content -->
    </nav>

    <nav class="navbar navbar-inverse bg-primary">
      <!-- Navbar content -->
    </nav>

    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <!-- Navbar content -->
    </nav>

    <script type="application/javascript">
        $("#stdnavbarexample").children().clone().appendTo('#navbarcolorschemes>nav');
    </script>
</div>

### Containers
Although it’s not required, you can wrap a navbar in a .container to center it on a page or add one within to only center the contents of a fixed or static top navbar.
{% highlight html %}
<div class="container">
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <a class="navbar-brand" href="#">Navbar</a>
  </nav>
</div>
{% endhighlight %}

### 定位Navbar
{% highlight html %}
<nav class="navbar navbar-light bg-faded">
  <a class="navbar-brand" href="#">Full width</a>
</nav>
<nav class="navbar fixed-top navbar-light bg-faded">
  <a class="navbar-brand" href="#">Fixed top</a>
</nav>
<nav class="navbar fixed-bottom navbar-light bg-faded">
  <a class="navbar-brand" href="#">Fixed bottom</a>
</nav>
<nav class="navbar sticky-top navbar-light bg-faded">
  <a class="navbar-brand" href="#">Sticky top</a>
</nav>

{% endhighlight %}

### Navbar collapse之后Toggle按钮的位置
Navbar togglers can be left or right aligned with `.navbar-toggler-left` or `.navbar-toggler-right` modifiers.

{% highlight html %}
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  ...
 </nav>
{% endhighlight %}


Scrollspy
---------
To easily add scrollspy behavior to your topbar navigation, add data-spy="scroll" to the element you want to spy on (most typically this would be the <body>). Then add the data-target attribute with the ID or class of the parent element of any Bootstrap .nav component.

或者在声明`position:relative`之后调用JavaScript接口：
{% highlight javascript %}
    $('body').scrollspy({ target: '#navbar-example' })
{% endhighlight %}

No matter the implementation method, scrollspy requires the use of position: relative; on the element you’re spying on. In most cases this is the <body>. When scrollspying on elements other than the <body>, be sure to have a height set and overflow-y: scroll; applied.

<div class="highlight-html2">
    <div class="bd-example">
      <nav id="navbar-example2" class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav nav-pills">
          <li class="nav-item"><a class="nav-link" href="#fat">@fat</a></li>
          <li class="nav-item"><a class="nav-link" href="#mdo">@mdo</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#one">one</a>
              <a class="dropdown-item" href="#two">two</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item active" href="#three">three</a>
            </div>
          </li>
        </ul>
      </nav>
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" class="scrollspy-example" style="position:relative; height: 200px; overflow-y:scroll">
        <h4 id="fat">@fat</h4>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <h4 id="mdo">@mdo</h4>
        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
        <h4 id="one">one</h4>
        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
        <h4 id="two">two</h4>
        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
        <h4 id="three">three</h4>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.
        </p>
      </div>
    </div>
</div>

Form
----
Bootstrap Form的所有input元素都必须要带有type属性。

### 基本使用例子
form -> .form-group -> .form-check

<div class="highlight-html2">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleSelect1">Example select</label>
        <select class="form-control" id="exampleSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleSelect2">Example multiple select</label>
        <select multiple class="form-control" id="exampleSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleTextarea">Example textarea</label>
        <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
        <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
      </div>
      <fieldset class="form-group">
        <legend>Radio buttons</legend>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
            Option one is this and that&mdash;be sure to include why it's great
          </label>
        </div>
        <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
            Option two can be something else and selecting it will deselect option one
          </label>
        </div>
        <div class="form-check disabled">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
            Option three is disabled
          </label>
        </div>
      </fieldset>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>

<div class="highlight-html2">
    <div class="form-group row">
      <label for="example-text-input" class="col-2 col-form-label">Text</label>
      <div class="col-10">
        <input class="form-control" type="text" value="Artisanal kale" id="example-text-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-search-input" class="col-2 col-form-label">Search</label>
      <div class="col-10">
        <input class="form-control" type="search" value="How do I shoot web" id="example-search-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-email-input" class="col-2 col-form-label">Email</label>
      <div class="col-10">
        <input class="form-control" type="email" value="bootstrap@example.com" id="example-email-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-url-input" class="col-2 col-form-label">URL</label>
      <div class="col-10">
        <input class="form-control" type="url" value="https://getbootstrap.com" id="example-url-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-tel-input" class="col-2 col-form-label">Telephone</label>
      <div class="col-10">
        <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-password-input" class="col-2 col-form-label">Password</label>
      <div class="col-10">
        <input class="form-control" type="password" value="hunter2" id="example-password-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-number-input" class="col-2 col-form-label">Number</label>
      <div class="col-10">
        <input class="form-control" type="number" value="42" id="example-number-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-datetime-local-input" class="col-2 col-form-label">Date and time</label>
      <div class="col-10">
        <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-date-input" class="col-2 col-form-label">Date</label>
      <div class="col-10">
        <input class="form-control" type="date" value="2011-08-19" id="example-date-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-month-input" class="col-2 col-form-label">Month</label>
      <div class="col-10">
        <input class="form-control" type="month" value="2011-08" id="example-month-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-week-input" class="col-2 col-form-label">Week</label>
      <div class="col-10">
        <input class="form-control" type="week" value="2011-W33" id="example-week-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-time-input" class="col-2 col-form-label">Time</label>
      <div class="col-10">
        <input class="form-control" type="time" value="13:45:00" id="example-time-input">
      </div>
    </div>
    <div class="form-group row">
      <label for="example-color-input" class="col-2 col-form-label">Color</label>
      <div class="col-10">
        <input class="form-control" type="color" value="#563d7c" id="example-color-input">
      </div>
    </div>
</div>


### Inline的Form Element
使用form-inline来创建inline的form。
由于inline form是使用`display:flex`来创建的，所以你可以用spacing utils和flex utils
来微调layout。

另外，所有bootstrap form的元素都应该配有label，即使你不希望它显示在屏幕中。在那种情况下
你可以用.sr-only来隐藏。

<div class="highlight-html2">
    <form class="form-inline">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe">

      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">@</div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>

      <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Remember me
        </label>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>



### 用格子系统layout form
<div class="highlight-html2">
    <div class="container">
      <form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
          </div>
        </div>
        <fieldset class="form-group row">
          <legend class="col-form-legend col-sm-2">Radios</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                Option one is this and that&mdash;be sure to include why it's great
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                Option two can be something else and selecting it will deselect option one
              </label>
            </div>
            <div class="form-check disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                Option three is disabled
              </label>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <label class="col-sm-2">Checkbox</label>
          <div class="col-sm-10">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox"> Check me out
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-sm-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
    </div>
</div>

#### 支持指定控件大小。
<div class="highlight-html2">
    <div class="container">
      <form>
        <div class="form-group row">
          <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control form-control-lg" id="lgFormGroupInput" placeholder="you@example.com">
          </div>
        </div>
        <div class="form-group row">
          <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control form-control-sm" id="smFormGroupInput" placeholder="you@example.com">
          </div>
        </div>
      </form>
    </div>
</div>


### Checkbox
Form开始的介绍例子显示了block排列下的checkbox，实际上还可以使用`.form-check-inline`
创建inline的checkbox。
<div class="highlight-html2">
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
      </label>
    </div>
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"> 2
      </label>
    </div>
    <div class="form-check form-check-inline disabled">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled> 3
      </label>
    </div>
</div>


### 静态控件
<div class="highlight-html2">
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <p class="form-control-static">email@example.com</p>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
      </div>
    </form>
</div>


### Disable控件
<div class="highlight-html2">
    <form>
      <fieldset disabled>
        <div class="form-group">
          <label for="disabledTextInput">Disabled input</label>
          <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
        </div>
        <div class="form-group">
          <label for="disabledSelect">Disabled select menu</label>
          <select id="disabledSelect" class="form-control">
            <option>Disabled select</option>
          </select>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"> Can't check this
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
</div>


### 只读控件
<div class="highlight-html2">
<form>
    <input class="form-control" type="text" placeholder="Readonly input here…" readonly>
</form>
</div>


### 控件大小
<div class="highlight-html2">
    <form>
        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
        <input class="form-control" type="text" placeholder="Default input">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
    </form>
</div>


### 控件的提示文档
<div class="highlight-html2">
    <form>
        <label for="inputPassword5">Password</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
        <p id="passwordHelpBlock" class="form-text text-muted">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </p>
    </form>
</div>
<div class="highlight-html2">
    <form class="form-inline">
      <div class="form-group">
        <label for="inputPassword4">Password</label>
        <input type="password" id="inputPassword4" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
        <small id="passwordHelpInline" class="text-muted">
          Must be 8-20 characters long.
        </small>
      </div>
    </form>
</div>


### 控件的验证(Validation)
往.form-control和.col-form-label等控件的父亲节点添加.has-warning/.has-danger/.has-success
就可以让.form-control-feedback/.form-control/.form-contorl-label等自动带上相应的style。

而.form-control-success/.form-control-warning/.form-control-danger的作用是在控件右边
添加相应的logo。

<div class="highlight-html2">
    <form>
        <div class="form-group has-success">
          <label class="form-control-label" for="inputSuccess1">Input with success</label>
          <input type="text" class="form-control form-control-success" id="inputSuccess1">
          <div class="form-control-feedback">Success! You've done it.</div>
          <small class="form-text text-muted">Example help text that remains unchanged.</small>
        </div>
        <div class="form-group has-warning">
          <label class="form-control-label" for="inputWarning1">Input with warning</label>
          <input type="text" class="form-control form-control-warning" id="inputWarning1">
          <div class="form-control-feedback">Shucks, check the formatting of that and try again.</div>
          <small class="form-text text-muted">Example help text that remains unchanged.</small>
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="inputDanger1">Input with danger</label>
          <input type="text" class="form-control form-control-danger" id="inputDanger1">
          <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
          <small class="form-text text-muted">Example help text that remains unchanged.</small>
        </div>
    </form>
</div>

<div class=highlight-html2">
    <form>
        <div class="form-check has-success">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" id="checkboxSuccess" value="option1">
            Checkbox with success
          </label>
        </div>
        <div class="form-check has-warning">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" id="checkboxWarning" value="option1">
            Checkbox with warning
          </label>
        </div>
        <div class="form-check has-danger">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" id="checkboxDanger" value="option1">
            Checkbox with danger
          </label>
        </div>
    </form>
</div>


### Bootstrap自定义的form
详细请看[官方文档](https://v4-alpha.getbootstrap.com/components/forms/?optionsRadios=option1#custom-forms)。

<div class="highlight-html2">
    <form>
        <label class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">Check this custom checkbox</span>
        </label>
    </form>
</div>

<div class="highlight-html2">
    <form>
        <div class="form-group has-success">
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Check this custom checkbox</span>
          </label>
        </div>
        <div class="form-group has-warning">
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Check this custom checkbox</span>
          </label>
        </div>
        <div class="form-group has-danger mb-0">
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Check this custom checkbox</span>
          </label>
        </div>
    </form>
</form>
</div>

Card
----
先看例子
<div class="highlight-html2">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ce8db64a3%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ce8db64a3%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.015625%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <h6 class="card-subtitle">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>

      <ul class="list-group list-group-flush">
          <li class="list-group-item">item1</li>
          <li class="list-group-item">item2</li>
          <li class="list-group-item">item3</li>
      </ul>

      <div class="card-block">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
       </div>
    </div>
</div>

需要注意的是：
1.  .card-link will make <a> follow one and another in a row

### List Group
<div class="highlight-html2">
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
</div>


### Header and Footer
<div class="highlight-html2">
    <div class="card text-center">
      <h3 class="card-header">
        Featured
      </h3>
      <div class="card-block">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>


### Card中加入导航
<div class="highlight-html2">
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="card-block">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>

下面这个是pill的look and feel，同时是一个可以work的nav tab。
<div class="highlight-html2">
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#cardActive">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab"  href="#cardLink">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" data-toggle="tab" href="#cardDisabled">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="card-block">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="cardActive" role="tabpanel">Pill ex.1</div>
        <div class="tab-pane fade" id="cardLink" role="tabpanel">Pill ex.2</div>
        <div class="tab-pane fade" id="cardDisabled" role="tabpanel">Pill ex.3</div>
      </div>
    </div>
</div>

### Image
本章开头提供了用card-img-top的例子,同样的也会有card-img-bottom，这里主要讨论overlay的图片。
<div class="highlight-html2">
    <div class="card card-inverse" id="cardoverlayimage">
      <img class="card-img" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22769%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20769%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ceeb2e1c7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A38pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ceeb2e1c7%22%3E%3Crect%20width%3D%22769%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22287.3125%22%20y%3D%22152.1%22%3E769x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="height: 270px; width: 100%; display: block;">
      <div class="card-img-overlay">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <script type="application/javascript">
        setInterval(function() {
            $('#cardoverlayimage').toggleClass('card-inverse');
        }, 1000);
    </script>
</div>

### 反色效果
在card元素中加入.card-inverse可创建发色效果的card。具体例子可看上面Image小节。

### bootstrap內建的多种card color scheme
<div class="highlight-html2" id="cardcolorscheme">
    <div class="card card-inverse card-primary mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-inverse card-success mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-inverse card-info mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-inverse card-warning mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-inverse card-danger text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <script type="application/javascript">
        setInterval(function() {
            $('#cardcolorscheme .card').toggleClass('card-inverse');
        }, 1000);
    </script>
</div>
<div class="highlight-html2">
    <div class="card card-outline-primary mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-outline-secondary mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-outline-success mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-outline-info mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-outline-warning mb-3 text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card card-outline-danger text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
</div>


### 多种Card的布局类型
#### 例子一: card-group
注意的是用了card-group之后card-footer会自动对齐。
<div class="highlight-html2">
    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="/assets/256-180.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/assets/256-180.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/assets/256-180.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
</div>

#### 例子二: card-deck
<div class="highlight-html2">
    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="/assets/235-180.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/assets/235-180.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/assets/235-180.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
</div>

#### 例子三: card-columns
card-column的style类似[Masonry](https://masonry.desandro.com/)。
<div class="highlight-html2">
    <div class="card-columns">
      <div class="card">
        <img class="card-img-top img-fluid" src="/assets/242-160.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title that wraps to a new line</h4>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div class="card p-3">
        <blockquote class="card-block card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>
            <small class="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div class="card">
        <img class="card-img-top img-fluid" src="/assets/242-160.svg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card card-inverse card-primary p-3 text-center">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
          <footer>
            <small>
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div class="card text-center">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img img-fluid" src="/assets/242-260.svg" alt="Card image">
      </div>
      <div class="card p-3 text-right">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>
            <small class="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
</div>


轮播头图
----
下面的例子包含所有bootstrap支持的轮播头图功能（实际使用可以去掉部分功能的）
<div class="highlight-html2">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="d-block img-fluid" src="/assets/firslidecarousel.svg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="/assets/secslidecarousel.svg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="/assets/thislidecarousel.svg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div>

其中
* `data-ride="carousel"`让改轮播头图在page load之后自动滚动。对应的可以通过这条js
语句启动`$('.carousel').carousel()`。使用js启动还可以用options自定义滚动的行为细节。
* `data-slide="prev"`或者`data-slide="next"`指定按钮将触发向前或者向后滚动一次。
对应的js语句是`$('.carousel').carousel("prev")`和`$('.carousel').carousel("next")`
* `data-slide-to="0"`指定按钮将触发滚动到某一页面的行为。Js的就是`$('.carousel').carousel(num)。
* Js还可以控制轮播头图的暂停和继续


Jumbotron
---------
类似Card，是一个用来突出文字内容的容器。
<div class="highlight-html2">
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
</div>

模态对话框
-----
1. Bootstrap的model打开时鼠标滚轮事件只deliver到model，不deliver到background。
2. 点击model的背后暗幕可关闭model
3. Bootstrap只支持同时一个model显示
4. Bootstrap的position是fixed，所以你应该把它定义在body根部，以防受到DOM树节点的style的影响
5. 也是因为fixed position，移动端需要有特殊的处理，详看[官方文档](https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile)
6. autofocus html5属性在model中无效，需要采用类似以下代码的方式触发自动focus
{% highlight javascript %}
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
{% endhighlight %}

例子：
<div class="highlight-html2">
<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="highlight-html2">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong3">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
              <h5>Popover in a modal</h5>
              <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
              <hr>
              <h5>Tooltips in a modal</h5>
              <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
            </div>
         </div>
      </div>
    </div>
</div>

<div class="highlight-html2">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong2">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4 color-1">.col-md-4</div>
                  <div class="col-md-4 col-md-offset-4 color-2">.col-md-4 .col-md-offset-4</div>
                </div>
                <div class="row">
                  <div class="col-md-3 col-md-offset-3 color-3">.col-md-3 .col-md-offset-3</div>
                  <div class="col-md-2 col-md-offset-4 color-4">.col-md-2 .col-md-offset-4</div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 color-1">.col-md-6 .col-md-offset-3</div>
                </div>
                <div class="row">
                  <div class="col-sm-9 color-1">
                    Level 1: .col-sm-9
                    <div class="row">
                      <div class="col-8 col-sm-6 color-2">
                        Level 2: .col-8 .col-sm-6
                      </div>
                      <div class="col-4 col-sm-6 color-3">
                        Level 2: .col-4 .col-sm-6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
</div>

### Model模板
想做一个内容根据触发按钮而变化的模态对话框？使用jQuery的event.relatedTarget可以得到
toggle该model的button，另外使用data-*属性可以传送自定义的参数。看下面的例子。
<div class="highlight-html2">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open for @mdo</button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open for @fat</button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open for @getbootstrap</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="form-control-label">Recipient:</label>
                <input type="text" class="form-control" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="form-control-label">Message:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div>
    <script type="application/javascript">
        $('#exampleModal').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var recipient = button.data('whatever') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
          var modal = $(this)
          modal.find('.modal-title').text('New message to ' + recipient)
          modal.find('.modal-body input').val(recipient)
        })
    </script>
</div>

### 动态大小
如果在model打开的过程中（如show.bs.model事件）改变了对话框大小（如改动了内容），可以通过
`$('#myModal').data('bs.modal').handleUpdate()`来刷新。

### 调整Model框的大小
有时候为了避免产生滚动条，我们需要调整Model的大小。把.model-lg/.model-sm等添加到.model-dialog的class中即可实现。
<div class="highlight-html2">
    <!-- Large modal -->
    <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        大的模态对话框
        </div>
      </div>
    </div>

    <!-- Small modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
        小的模态对话框
        </div>
      </div>
    </div>
</div>


<pre><code class="python" id="testpython">
class UIInputHandler(ManagerBase,IUIManager):
	def __init__(self,uiManager):
		super(UIInputHandler,self).__init__()
		self.uiManager=uiManager
		self.keyBoard=KeyboardManager()
		self.mouse = MouseManager()
		self.gamepad = GamepadManager()

	################################
	def getManager(self):
		return self.uiManager

	def update(self):
		self.keyBoard.update()

	def destroy(self):
		self.keyBoard.destroy()

	def clickOnScreen(self,x,y):
		Globals.UI.fireTouchAt(x,y)
</code></pre>

<script type="application/javascript">
    $(document).ready(function () {
        var codearea = $('#testpython');
        var orig_code = codearea.text();
        codearea.text('');
        hljs.highlightBlock(codearea[0]);
        codearea.append('<div id="newcode"></div>');

        var curbuf = '';

        codeidx = 0;
        var tm = setInterval(function () {
            curbuf += orig_code.charAt(codeidx);
            $('#testpython>#newcode').text(curbuf);
            if (orig_code.charAt(codeidx) == '\n') {
                var codearea = $('#testpython');
                codearea.text(orig_code.substr(0, codeidx+1));
                hljs.highlightBlock(codearea.parent()[0]);
                $('#testpython').append('<div id="newcode"></div>');
                curbuf = '';
            }

            codeidx += 1;
            if (codeidx == orig_code.length) {
                    clearInterval(tm);
            }
         }, 100);
    });
</script>
