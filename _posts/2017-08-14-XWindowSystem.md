---
layout: post
title: Introduction to X Window System
categories: Intro X
---

X Window System
===============
X窗口系统是Linux/Unix世界最古老的系统之一，紧跟着BSD的网络模块出现。它的设计和实现要追溯到20世纪70年代在美国MIT的一个
名为Athena的项目。该项目目标是利用当时新添加到Unix系统的网络模块的能力连接Xerox的大型机和
研究人员的屏幕输出设备。X作为Athena项目的一部分第一个release是在1984年，之后它的研发和
规范就转交给X委员会(X Consortium)管理了。

由于X Window System设计之初就把Application和Display media分离，构建在Interprocess
communication模型之上，所以基于X的所有Linux/Unix
程序天然支持"remote access"。这是X使用上的最大优点。把该模型稍加推广后我们甚至可以轻松
实现在一个桌面环境下同时可视化操控多台位于不同服务器的远端进程，非常方便。

然而，也许是为了追随Linux命令集的简单和专一化设计哲学，X的设计者把X窗口该系统做成一套
由很多实现特定功能的service和tool组成的系统。正是因为相关service和tool很多，配置分散，
新手了解和学习X的门槛变得很高，再加上X系统设计年代的古老，缺少系统的设计和使用文档，即使是Linux
的老手也对X系统的工作原理感到困惑。

最近两天我在捣鼓如何在我身边的windows系统里连接到我的云开发服务器上使用remarkable编辑我自己的
项目说明文档，过程中需要安装配置Xming和putty，还有配置服务器端的拼音输入法。作为一个X窗口系统的
文盲刚好趁机会看了很多网上关于X窗口系统的介绍文章，开始了解X窗口系统的方方面面。我想借这篇博文跟
大家分享一些总结和心得，其中有些总结可能不准确，缺少细致的考证，但是我相信那不影响对总体架构的理解，
能够为大家扫除基本困惑，继续深入自学X window system有所帮助。

在此引用几篇我认为对理解X窗口系统帮助很大的几篇文章：
* [TLDP: X Window System Architecture Overview HOWTO](http://www.tldp.org/HOWTO/XWindow-Overview-HOWTO/introduction.html)
* [X Window System: Font and Colors](http://linuxdocs.org/HOWTOs/XWindow-User-HOWTO-7.html)
* [System font configuration files](https://superuser.com/questions/93070/demystifying-font-appearance-on-linux-the-proper-way/93103)
* [Installing Font in Ubuntu](https://wiki.ubuntu.com/Fonts)

X Window System: Architecture
-----------------------------
X窗口系统是C/S结构的，Application是Client，Display是Server。没错，把应用程序的GUI显示出来
并相应用户输入的进程是Server而不是Client！当然，准确来说它是一个拥有超级权限的client——window manager。
哪么X的server是什么呢？它在系统里面起什么样的作用呢？前者的答案是xinit，后者请见下文讨论。

先给出X窗口系统基本架构的示意图，下文的讨论都围绕着这张图展开。四周4个方框代表X client，
中间是X server。其中上面两个是普通X client，下面两个是X super client。Super client
一般而言运行在本地。在目前Linux个人电脑里，所有的X client和X server都运行在本地。
![X window system overview](/assets/x-window-system-overview.svg)

X窗口系统的client通过X protocol把向绘图指令发给X server，X server负责启动合适的super client
去相应这些绘图指令，在屏幕或者打印设备中把client进程的GUI显示出来。super client是一种
带有超级权限的client，可以从server那里接受绘图指令，驱动宿主机的输出设备硬件driver，
捕捉来自宿主机输入设备的各种事件，并把这些事件逆向经由X server，interprocess communication
relay到X client，最终由X client进程根据业务需要相应键盘输入和鼠标点击行为，并且把GUI的反馈
更新发回给X server，从而完成一个事件-relay-响应-控件更新-relay-display更新-事件的循环。

为了实现上述和X server通讯的模型，X窗口系统提供了XLib库给X的客户端程序（这里特指非super client），
把X protocol和基本的绘图响应API封装到这个XLib库里面。X的客户端程序调用XLib的API往X server传送绘图指令和
得到用户交互输入。然而XLib的API过于基础，实现一个普通的UI控件也需要非常复杂的XLib代码。
于是乎开源软件社区便在XLib之上开发了很多GUI widget库。其中最有名的要数GTK和QT。GTK全名是
GIMP Toolkit。GNU Foundation接管了GIMP项目并对GTK这个原本只是GUI widget库的项目做了很多
内容扩充，补充了很多使用的函数库。所以现在我们也可以管GTK叫GNU Toolkit。QT则是另一个业界
非常有名的基于X窗口系统的GUI库。事实上，所有的Linux系统的图形化显示要么构建在X窗口系统
之上，要么构建在最近挺火的[Wayland](https://wayland.freedesktop.org/faq.html)之上。

X窗口系统的另一端——X server由startx脚本启动，进程名字是xinit（比较一下linux系统init进程就
明白了）。xinit使用X protocol和XLib通信，负责启动独立的进程在窗口某区域绘图。这里需要澄清
的一个概念是Window Manager（WM）。WM的作用并不是在屏幕区域绘图（绘图是X server做的），
而是在宿主操作系统上提供视窗结构，分配视窗和销毁视窗，还有视窗内事件的捕捉等，简单来说就是
我们看到的窗口边框和边框上的那些功能。上图为了标注方便把其中一个super client标为WM，事实上
应该是受WM管理的一个绘图进程。


X窗口系统下的两个font subsystem
-----------------------
X窗口系统程序可以使用两个font subsystem之一来完成字体的显示：
* XLib + Xfs
* Fontconfig + Xft/Cairo

其中XLib + Xfs是old solution，Fontconfig + Xft/Cairo是新的solution。后者比前者有更好
的性能和更简单的API。前者是Server计算字体，后者是Client计算字体。同一个应用程序，使用前者
可能在不同的X server中有不同的字体呈现，而后者则是一致的。下面我们分别讨论一下。

### X Font System: Xfs
这是X Window System用来往外部设备绘制字体的进程，工作在X server端。Xfs接受X client
字体输出指令，读取X server端字体数据库有关该字体绘制的公式（字体文件的内容就是该字体类型的
形状公式），把字体渲染到屏幕上。我猜X的设计者把字体渲染独立为Xfs的原因可能是字体绘制算法非常复杂，
是为了降低工程复杂度的。这里要注意的是X client只会告诉X server它要用什么类型的字体输出什么字，而具体每个字在输出
设备上的位置和线条信息则是由Xfs计算得到。

和X字体相关的工具有：
* xfontsel: 帮助开发者和用户找到目标字体的`XLFD`（就是X里面唯一定义一种字体的ID）
* mkfontdir <font dir>: 扫描font dir，把该目录下的所有字体文件的summary写到该目录下的fonts.dir中，
从而让改目录成为X字体数据库的一部分。注意：该dir应该位于标准的X字体文件路径下面。
* xset fp rehash: 触发X的字体数据库更新。一般在mkfontdir之后调用，用于往X窗口系统中添加字体

### Fontconfig + Xft
Fontconfig是一套在X client机上的字体管理工具，最常见的就是fc-list和fc-cache命令，分别
用来列出fontconfig系统管理的所有字体和操作fontconfig内部的字体数据库。

Xft是一个在X client中使用的字体绘制库，通过XLib集成到X窗口系统中。Xft使用fontconfig来获取
字体信息，然后做本地字体计算，最后使用XLib的绘制指令在远端输出字体。






