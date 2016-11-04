create
---------

### Usage

    edp urmgr create module moduleName [--title=title] [--force]
    edp urmgr create page moduleName pageName [--title=title] [--index] [--force]

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
