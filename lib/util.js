/**
 * @file 一些工具方法
 * @author: dabeen(lidianbin@baidu.com)
 * @date:   2016-11-03 17:09:02
 */

function assign(tpl, kvMap) {
    var re = /\$\{(.*?)\}/g;
    return tpl.replace(re, function ($0, $1) {
        var keys = $1.split('|');
        if (kvMap[keys[0]]) {
            if (keys[1]) {
                // 首字母大写
                if (keys[1] === 'upper') {
                    return kvMap[keys[0]][0].toUpperCase() + kvMap[keys[0]].slice(1);
                }
            }
            return kvMap[keys[0]];
        }
        return $0;
    });
}

/**
 * 替换 ${modName} => modName
 *
 * @param  {string} tpl   模板
 * @param  {string} modName  模块名
 * @return {string}
 */
exports.replaceModName = function (tpl, modName) {
    return assign(tpl, {modName: modName});
};

exports.replaceModTitle = function (tpl, modTitle) {
    return assign(tpl, {modTitle: modTitle});
};

exports.assign = assign;
