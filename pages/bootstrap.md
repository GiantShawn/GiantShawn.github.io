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


