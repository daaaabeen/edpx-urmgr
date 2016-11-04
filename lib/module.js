/**
 * @file 模块管理
 * @author: dabeen(lidianbin@baidu.com)
 * @date:   2016-11-03 20:42:22
 */
var edp = require('edp-core');
var path = require('path');
var fs = require('fs');
var util = require('./util');

var fileList = ['routes.js', 'constants.js', 'index.styl'];

/**
 * 创建一个模块里必须的文件
 *
 * @param  {string} modName 模块名
 */
function createFiles(modName) {
    fileList.forEach(
        function (file) {
            var fileTpl = edp.fs.readFileSync(path.resolve(__dirname, '../tpl/module/' + file + '.tpl'));
            fileTpl = util.assign(fileTpl, {modName: modName});
            edp.log.info('create file `' + file + '`');
            fs.writeFileSync(file, fileTpl, {flag: 'w+'});
        }
    );
}

/**
 * 更新App.js
 *
 * @param  {string} modName  模块名
 * @param  {string} modTitle 模块要显示的名字
 */
function updateNavLink(modName, modTitle) {
    edp.log.info('更新 `App.js` 中的nav');
    var appRoot = edp.path.getRootDirectory(process.cwd());
    var fileAppJsPath = path.resolve(appRoot, 'src', 'App.js');
    var fileAppJs = edp.fs.readFileSync(fileAppJsPath);
    var fileNavLinkJsTpl = edp.fs.readFileSync(path.resolve(__dirname, '../tpl/navLink.js.tpl'));

    fileNavLinkJsTpl = util.assign(fileNavLinkJsTpl, {modName: modName, modTitle: modTitle});

    var re = /(?=<nav>)([.\s\S]*)(?=<\/nav>)/;
    fileAppJs = fileAppJs.replace(re, function ($0) {
        return $0 + fileNavLinkJsTpl;
        // fileAppJs = fileAppJs.replace($1, $1 + fileNavLinkJsTpl);
    });
    fs.writeFileSync(fileAppJsPath, fileAppJs, {flag: 'w'});
}

function addStyleLink(modName) {
    edp.log.info('在 src `main.styl` 里引入' + modName + '的样式');
    var appRoot = edp.path.getRootDirectory(process.cwd());
    fs.writeFileSync(
        path.resolve(appRoot, 'src', 'main.styl'),
        '@require \'./' + modName + '/index.styl\'\n',
        {flag: 'a+'}
    );
}

/**
 * 添加route到routes.js里
 *
 * @param {string} modName 模块名
 */
function addRoutes(modName) {
    edp.log.info('更新 src 下的`routes.js` 引入' + modName + '的routes');

    var appRoot = edp.path.getRootDirectory(process.cwd());
    var fileRoutesJsPath = path.resolve(appRoot, 'src', 'routes.js');
    var fileRoutesJs = edp.fs.readFileSync(fileRoutesJsPath);

    var re = /([.\s\S]*)(\nexport default \[)([.\s\S]*)(\][.\s\S]*)/;
    fileRoutesJs = fileRoutesJs.replace(re, function ($0, $1, $2, $3, $4) {
        return $1
            + 'import ' + modName + ' from \'./' + modName + '/routes\';\n'
            + $2
            + $3.replace(/(\s*$)/g, '')
            + ',\n    ...' + modName + '\n'
            + $4;
    });

    // console.log(fileRoutesJs);
    fs.writeFileSync(
        fileRoutesJsPath,
        fileRoutesJs,
        {flag: 'w'}
    );
}

/**
 * create Module
 *
 * @param  {string} modName  模块名
 * @param  {string} modTitle 模块标题
 * @param  {boolean} force   是否强制
 */
exports.createModule = function (modName, modTitle, force) {

    var appRoot = edp.path.getRootDirectory(process.cwd());

    process.chdir(path.resolve(appRoot, 'src'));

    if (fs.existsSync(modName)) {
        if (force) {
            edp.util.rmdir(modName);
        }
        else {
            throw new Error('文件夹' + modName + '已经存在');
        }
    }

    fs.mkdirSync(modName);
    process.chdir(modName);
    // edp.log.info(process.cwd());

    // 创建文件
    createFiles(modName);
    // 更新title
    updateNavLink(modName, modTitle);

    addStyleLink(modName);

    addRoutes(modName);

};
