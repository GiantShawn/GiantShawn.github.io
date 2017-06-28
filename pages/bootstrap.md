---
layout: page
title: Bootstrap
date: 2017-06-24 15:42:00 +0008
bootstrap_support: true
---

Bootstrap.js
============

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
1. 调用`$('.alert').alert('close')`: 可以搭配.fade和.show class打开渐隐效果。
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
