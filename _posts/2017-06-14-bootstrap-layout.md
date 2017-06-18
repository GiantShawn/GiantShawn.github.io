---
layout: post
title: Bootstrap的布局管理
categories: WebTech FrontEnd Bootstrap
---

Bootstrap的布局管理
==============


网格系统(Grid System)
-----------------
Bootstrap的网格系统基本原理是把屏幕显示区域以网格的形式切分为横向12列，纵向列数不限的格子系统。
一个格子系统被封装在class为container的HTML元素中(`<div class="container"> ... </div>`)，
每行

### 基本的切分点(breakpoint)
Bootstrap为了支持全平台、多尺寸、可转屏的设备，定义了5档(breakpoint)可静态配置（通过sass定义）
的尺寸大小类型。这些类型从小到大分别是：
* `xs`: (\\(x <= 576_{px}\\)) 竖屏手机
* `sm`: ($$576_{px} < x <= 768_{px}$$) 横屏手机
* `md`: ($$768_{px} < x <= 992_{px}$$) Tablet/iPad Air
* `lg`: ($$992_{px} < x <= 1200_{px}$$) Desktop
* `xl`: (\\(x > 1200_{px}\\)) Large Desktop

Bootstrap提供了方便的mixins给我们自定义style
{% highlight sass %}
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }

@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }

@include media-breakpoint-between(md, xl) { ... }

// Example usage:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}

{% endhighlight %}


Z-index
-------
详情参看[Z-index](https://v4-alpha.getbootstrap.com/layout/overview/#z-index)。





