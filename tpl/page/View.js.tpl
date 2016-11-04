/**
 * @file ${modName} ${pageName} view
 * @author: dabeen(lidianbin@baidu.com)
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
                        <label>${pageTitle}</label>
                        
                    </div>
                </header>
                <div className="ur-${modName}-${pageName}-content">
                    这里是内容
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
