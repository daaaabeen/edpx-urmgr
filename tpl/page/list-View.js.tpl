/**
 * @file ${modName} ${pageName} view
 * @author: dabeen(lidianbin@baidu.com)
 * @date:   2016-08-29 16:59:06
 */


import React, {Component, PropTypes} from 'react';
import {connect} from 'ei';
import Button from 'melon/Button';
import Icon from 'melon/Icon';
import Tooltip from 'melon/Tooltip';

import {createSelector} from '../../common/util/reselect';

/**
 * example
 */


import * as actions from './actions';

class ${modName|upper}${pageName|upper}View extends Component {

    render() {

        const locator = this.context.locator;

        return (
            <div className="ur-${modName}-${pageName}">
                <header>
                    <div>
                        <label>${pageTitle} 管理</label>
                        <div className="operation-panel">
                            <Tooltip content="添加 ${modName}" direction="bottom">
                                <Button
                                    variants={['primary', 'raised']}
                                    onClick={() => {
                                        locator.redirect('/${modName}/create');
                                    }}>
                                    <Icon icon="add" />添加
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </header>
                <div className="ur-${modName}-${pageName}-content">
                    这里是列表
                </div>
            </div>
        );
    }

}


export default connect(
    ${modName|upper}${pageName|upper}View,
    createSelector(
        [],
        function () {
            return {};
        }
    ),
    actions
);
