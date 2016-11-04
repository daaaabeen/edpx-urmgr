# edpx-urmgr
========

这个东西主要用于为ur-mgr-fe项目，创建模块和页面，再也不用手动复制粘贴了~

### Usage

    edp urmgr create module moduleName [--title=title] [--force]
    edp urmgr create page moduleName pageName [--title=title] [--index] [--force] [--tpl]

### Args

+ moduleName - 模块名
+ pageName - 页面名

### Options

+ --title - Page或者module的标题。
+ --index - 指定的page为nav里的入口。
+ --force - 强制创建。如果模块或Page目录存在时，指定此选项，将强制删除现有的目录，并重新创建模块或Page。
+ --tpl - 指定Page的模板类型 common、list、detail三种类型，默认为common

### Description

创建module或者创建Page

### Install

```
git clone https://github.com/beenlee/edpx-urmgr.git
cd edpx-urmgr
npm link
```

### Usage

比如pm要我做一个banner列表的管理功能，你可分以下几部完成：

1. 进入ur-mgr-fe项目的目录下

2. 如果没有banner模块，则创建一个叫做banner的module

    `edp urmgr create module banner --title=banner管理`

3. 在模块banner里创建一个使用list模板的Page, 并设为nav里的默认入口页面

    `edp urmgr create page banner list --title=banner列表 --tpl=list --index

4. 可以开心的开发了~

5. 如果又要加一个banner详情的页面~

    `edp urmgr create page banner detail --title=banner详情 --tpl=detail