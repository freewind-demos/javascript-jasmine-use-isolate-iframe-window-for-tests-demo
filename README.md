JavaScript Jasmine JQuery Tests Demo
=====================================

在浏览器中运行Jasmine测试。如果我们的代码中使用jquery，比如`window.$`，怎么测试？

Jasmine的做法是简单直接的，直接在`SpecRunner.html`中增加对JQuery的引用，然后再依次导入源文件和测试文件，最后在浏览器中打开`SpecRunner.html`

不过它带来的问题是源代码和测试代码不能使用模块语句。如果我们要使用，可能借助别的工具（比如browserify/webpack等），先对它们进行处理，再引入到`SpecRunner.html`中。

```
npm install
open SpecRunner.html
```

![demo](./images/demo.jpg)

