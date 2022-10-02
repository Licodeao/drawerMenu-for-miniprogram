# drawer-menu-for-miniprogram
基于微信小程序的沉浸式抽屉菜单

* 自定义导航栏组件
* 沉浸式抽屉菜单
* 侧边栏点击效果

## 起因

无意间发现了一个基于Swift UI的抽屉菜单，效果如下：

![6784e901877a4a7591a40ae5e7aaf8bb](https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/6784e901877a4a7591a40ae5e7aaf8bb.gif)

想着微信小程序上能实现这种UI风格，一定很酷。于是，自己上手撸了一个基本的demo，摸鱼一下午终于是搞定了。

期间准备添加触摸滑动显示抽屉的效果，发现写出后真机测试效果太烂，于是放弃了这个想法。

## 效果演示

* 预览

  ![](../drawer-menu/5todl-s3m3q.gif)

* 真机测试

  ![](../drawer-menu/90o06-nlned.gif)

## 总结

正如看到的GIF一样，不如Swift UI那般丝滑，不过好歹也能实现的像模像样了，基本的效果已经实现。

噢对，说下踩坑点：

* 微信小程序的this.animate() API，开发工具测试一切正常，预览与真机测试并没有效果
* 因此，必须得用传统的wx.createAnimation()来创建动画
