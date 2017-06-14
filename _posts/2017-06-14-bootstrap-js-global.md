---
layout: post
title: Bootstrap中JavaScript的基本应用规则
categories: WebTech FrontEnd Bootstrap
---

Bootstrap中JavaScript的基本应用规则
===========================

Bootstrap的基本使用思路就是通过HTML tag和data attribute打开或关闭关联的style和
actions，所以据官方的说法，如果不包含tag和attribute的改动，boostrap并不会生效。
我本地实测Bootstrap 4，发现依然有部分style被全局应用了，也许在后续版本中会修正这个问题。

通用的feature开关
------------
Bootstrap有很多feature相关的namespace与sub-namespace。这些namespace可以用来指代feature group。
譬如要关掉document上所有namespace为data-api的事件：
{% highlight javascript %}
$(document).off('.data-api')
{% endhighlight %}

要关掉document上alert plugin的事件：
{% highlight javascript %}
$(document).off('.alert.data-api')
{% endhighlight %}


通用的编程接口规范
---------

Bootstrap的各种plugin的相关接口都mixin到jQuery库中，保持和jQuery一致的编程风格，
包括函数是chainable的，返回element集合。

### Plugin函数参数约定
另外，所有的Bootstrap函数都接收可选的options参数，或者一个string来指代具体的行为。
{% highlight javascript %}
$('#myModal').modal()                      // initialized with defaults
$('#myModal').modal({ keyboard: false })   // initialized with no keyboard
$('#myModal').modal('show')                // initializes and invokes show immediately
{% endhighlight %}

### 基本的plugin使用
* Bootstrap的plugin一般来说对应`$.fn`下面的一个或多个函数，譬如`$.fn.popup`对应
弹窗plugin。我们可以使用`$(element).popup()`来设置该element上的这个plugin行为。
* 也可以用每个plugin提供的构造函数(Constructor)来构造plugin实例，如`$.fn.popup.Contructor`。
* 如果要获得绑定在dom元素上的插件实例，可以通过data查询得到，如
{% highlight javascript %}
$('[rel="popover"]').data('popover')
{% endhighlight %}
* 读取和修改plugin的默认配置
{% highlight javascript %}
$.fn.modal.Constructor.DEFAULTS.keyboard = false // changes default for the modal plugin's `keyboard` option to false
{% endhighlight %}

### 和其他UI framework共存
可以使用`.noconflict()`函数自定义plugin的函数名。

### 事件命名规范
Bootstrap的事件使用“现在时态”表示事件准备发生，用“过去完成时”表示事件已经发生。如
`show.bs.modal`和`shown.bs.modal`。



