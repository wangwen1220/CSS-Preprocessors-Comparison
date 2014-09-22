CSS-Preprocessors-Comparison
============================

这个repo包含了我对Less、Stylus、Scss、Myth四者的feature比较代码，以及相应的slider.

[![ScreenShot](https://raw.github.com/abruzzihraig/CSS-Preprocessors-Comparison/master/screenshot.png)](http://slides.com/abruzzihraig/css-preprocessors-comparison)

## Feature Comparision TODO 
- [x] [Variable](https://github.com/abruzzihraig/CSS-Preprocessors-Comparison/tree/variable/origin)
- [ ] [Operation]()
- [ ] [Built-in Function]()
- [x] [Mixin](https://github.com/abruzzihraig/CSS-Preprocessors-Comparison/tree/mixin/origin)
- [ ] [Extend]()
- [x] [Loop&Condition](https://github.com/abruzzihraig/CSS-Preprocessors-Comparison/tree/loop_condition/origin)
- [x] [CSS3-Prefixes](https://github.com/abruzzihraig/CSS-Preprocessors-Comparison/tree/prefix/origin)

## Initialize
1. clone这个repository并进入其根目录：
```
$ git clone git@github.com:abruzzihraig/CSS-Preprocessors-Comparison.git & cd ./CSS-Preprocessors-Preprocessors
2. 在你拥有ruby环境的前提下，如果没有安装compass，请通过下面的命令安装：
```
$ gem install compass
```
3. 在你拥有ruby环境的前提下，如果已经装有compass，请更新你的compass至最新版本：
```
$ bundle update compass
```
4. 在你拥有node环境的前提下，执行：
```
$ npm install
```
5. 在gulpfile所在目录（git根目录），执行：
```
$ gulp // Tips: 这会开启带有watch listener的编译task，随着你更换分支而自动编译更新'dist'目录下的所有css文件  
```
6. 执行下面的命令，你可以看到比较所有css preprocessor特性的分支:
```
$ git branch
```
7. 选择你感兴趣的特性比较分支，执行:
```
$ git checkout <feature branch>
```

## Please Follow Me :pray:
我follow都不到两位数 :joy:

## Liscense
MIT
