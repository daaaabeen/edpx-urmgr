/**
 * @file Page
 * @author: dabeen(lidianbin@baidu.com)
 * @date:   2016-11-04 11:09:57
 */
var edp = require('edp-core');
var fs = require('fs');
var path = require('path');
var util = require('./util');

var fileList = [
    'Page.js',
    'View.js',
    'index.styl',
    'actions.js',
    'actionTypes.js',
    'reducer.js',
    'selector.js'
];

/**
 * 创建页面所需要的必须文件
 *
 * @param  {string} modName   模块名
 * @param  {string} pageName  页面名
 * @param  {string} pageTitle 页面的标题
 * @param  {string} tplName   所用的模板名[list detail]
 */
function createFiles(modName, pageName, pageTitle, tplName) {
    fs.mkdirSync('component');
    fileList.forEach(function (file) {
        var tplFileName = file + '.tpl';
        if (tplName && (file === 'View.js' || file === 'index.styl')) {
            switch (tplName) {
                case 'list':
                    tplFileName = 'list-' + file + '.tpl';
                    break;
                case 'detail':
                    tplFileName = 'detail-' + file + '.tpl';
                    break;
            }
        }

        var fileTpl = edp.fs.readFileSync(path.resolve(__dirname, '../tpl/page/' + tplFileName));

        fileTpl = util.assign(
            fileTpl,
            {modName: modName, pageName: pageName, pageTitle: pageTitle}
        );
        edp.log.info('create file `' + file + '`');
        fs.writeFileSync(file, fileTpl, {flag: 'w+'});
    });

}


function addRoutes(modName, pageName, index) {
    edp.log.info('更新 ' + modName + ' 下的`routes.js` 引入page:' + pageName);

    var fileRoutesJsPath = '../routes.js';
    var fileRoutesJs = edp.fs.readFileSync(fileRoutesJsPath);

    var re = /([.\s\S]*export default \[)([.\s\S]*)(\][.\s\S]*)/;

    var filePageRouteJsTpl = edp.fs.readFileSync(path.resolve(__dirname, '../tpl/pageRoute.js.tpl'));

    filePageRouteJsTpl = util.assign(
        filePageRouteJsTpl,
        {
            modName: modName,
            pageName: pageName,
            path: index ? modName : modName + '/' + pageName
        }
    );

    fileRoutesJs = fileRoutesJs.replace(re, function ($0, $1, $2, $3) {
        return $1
            + $2.replace(/(\s*$)/g, '')
            + filePageRouteJsTpl
            + $3;
    });

    // console.log(fileRoutesJs);
    fs.writeFileSync(
        fileRoutesJsPath,
        fileRoutesJs,
        {flag: 'w'}
    );
}

/**
 * [addStyleLink description]
 * @param {[type]} modName  [description]
 * @param {[type]} pageName [description]
 */
function addStyleLink(modName, pageName) {
    edp.log.info('添加' + modName + ' `index.styl` 来引入' + pageName + '的样式');
    fs.writeFileSync(
        '../index.styl',
        '@require \'./' + pageName + '/index.styl\'\n',
        {flag: 'a'}
    );
}



/**
 * 创建一个页面
 *
 * @param  {string} modName   模块名
 * @param  {string} pageName  页面名
 * @param  {string} pageTitle 页面的标题
 * @param  {boolean} index     是否是默认页面
 * @param  {boolean} force     是否强制创建
 * @param  {string} tplName   模板名
 */
exports.createPage = function (modName, pageName, pageTitle, index, force, tplName) {
    var appRoot = edp.path.getRootDirectory(process.cwd());

    process.chdir(path.resolve(appRoot, 'src'));

    if (!fs.existsSync(modName)) {
        throw new Error('模块' + modName + '不存在');
    }

    process.chdir(modName);

    if (fs.existsSync(pageName)) {
        if (force) {
            edp.util.rmdir(pageName);
        }
        else {
            throw new Error('文件夹' + pageName + '已经存在');
        }
    }

    fs.mkdirSync(pageName);
    process.chdir(pageName);

    // console.log(process.cwd());
    // 创建文件
    createFiles(modName, pageName, pageTitle, tplName);

    // 引入styl文件
    addStyleLink(modName, pageName);

    // 添加route
    addRoutes(modName, pageName, index);

};

