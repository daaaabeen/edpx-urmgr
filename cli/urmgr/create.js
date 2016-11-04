/**
 * @file    `edpx urmgr` cli create module
 * @author: lidianbin(lidianbin@baidu.com)
 * @date:   2016-11-01
 */

var edp = require('edp-core');
var module = require('../../lib/module');
var page = require('../../lib/page');

exports.cli = {

    description: '创建一个管理模块',

    options: ['force', 'index', 'title:', 'tpl:'],

    main: function (args, opts) {

        var act = args[0];
        var modName = args[1];

        if (!act) {
            edp.log.error('缺少要创建的框架类型！（`module` || `page`）');
            return;
        }

        if (!modName) {
            edp.log.error('缺少模块名！');
            return;
        }

        if (act === 'module') {
            var modTitle = opts.title || (modName + '管理');

            try {
                // 创建文件
                module.createModule(modName, modTitle, opts.force);
            }
            catch (e) {
                edp.log.error(e.message);
                return;
            }

            edp.log.info('great! `' + modTitle + '` 创建完成，可以开心的coding了~');
        }
        else if (act === 'page') {
            var pageName = args[2];
            if (!pageName) {
                edp.log.error('缺少Page名！');
                return;
            }
            try {
                var pageTitle = opts.title || (pageName + '管理');
                page.createPage(modName, pageName, pageTitle, opts.index, opts.force, opts.tpl);
            }
            catch (e) {
                edp.log.error(e.message);
            }
        }
        else {
            edp.log.error('没有此类型的操作！');
        }
    }
};

