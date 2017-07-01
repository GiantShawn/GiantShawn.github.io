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
<div class="subtopicgap"></div>

### 大小 (btn-lg/btn-sm)
<div class="highlight-html2">
    <h5 style="color:lightblue">Double click to see code</h5>
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
</div>
<div class="subtopicgap"></div>

### 块按钮（block level button）
块按钮就是被按照block方式编排的按钮，默认会横向充满可显示区域。

<div class="highlight-html2">
    <h5 style="color:lightblue">Double click to see code</h5>
    <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
</div>

<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>

### disable按钮
类似active状态，disable按钮的例子如下。
<div class="highlight-html2">
    <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
    <h5>&lt;a&gt;标签不支持disabled attribute，可以使用.disable</h5>
    <a type="button" class="btn btn-lg btn-primary disabled">Primary button</a>
    <a type="button" class="btn btn-secondary btn-lg disabled">Button</a>
</div>

<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>


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

<div class="subtopicgap"></div>


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

<div class="subtopicgap"></div>

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

<div class="subtopicgap"></div>

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

<div class='subtopicgap'></div>

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
<div class='subtopicgap'></div>

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
<div class='subtopicgap'></div>

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

<div class='subtopicgap'></div>

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
<div class='subtopicgap'></div>

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

<div class="subtopicgap"></div>

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

<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>
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

<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>

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

<div class="subtopicgap"></div>

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
<div class="subtopicgap"></div>

其中
* `data-ride="carousel"`让改轮播头图在page load之后自动滚动。对应的可以通过这条js
语句启动`$('.carousel').carousel()`。使用js启动还可以用options自定义滚动的行为细节。
* `data-slide="prev"`或者`data-slide="next"`指定按钮将触发向前或者向后滚动一次。
对应的js语句是`$('.carousel').carousel("prev")`和`$('.carousel').carousel("next")`
* `data-slide-to="0"`指定按钮将触发滚动到某一页面的行为。Js的就是`$('.carousel').carousel(num)。
* Js还可以控制轮播头图的暂停和继续

<div class="subtopicgap"></div>


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

<div class="subtopicgap"></div>

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

<div class="subtopicgap"></div>

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


<div class="subtopicgap"></div>

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

<div class="subtopicgap"></div>

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

<div class='subtopicgap'></div>

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

Navbar导航栏（统称，不仅可以包含nav，还可以包含button、text、brand、icon等）
----------------------------------------------------
* .navbar-brand for your company, product, or project name.
* .navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
* .navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
* .form-inline for any form controls and actions.
* .navbar-text for adding vertically centered strings of text.
* .collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.

<div class="highlight-html2">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
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
<div class="subtopicgap"></div>

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
                console.log("highlight", codearea.parent()[0]);
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
