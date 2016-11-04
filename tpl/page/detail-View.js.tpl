/**
 * @file ${modName} ${pageName} view
 * @author: dabeen(lidianbin@baidu.com)
 * @date:   2016-08-31 12:59:46
 */

import React, {Component, PropTypes} from 'react';

import {connect} from 'ei';
import {createSelector} from '../../common/util/reselect';
// import {getBanner} from './selector';
import * as actions from './actions';

import Title from 'melon/Title';

class ${modName|upper}${pageName|upper}View extends Component {


    render() {

        const act = this.props.act;

        const locator = this.context.locator;

        return (
            <div className="ur-${modName}-${pageName}">
                <header>
                    <Title level="3">
                        {act === 'create' ? '创建 ${modName}' : '编辑 ${modName}'}
                    </Title>
                </header>
                <ul className="ur-${modName}-${pageName}-step-container">
                    <li className="ur-${modName}-${pageName}-step">
                        <i>1</i>
                        <div>
                            <Title level={4}>${pageTitle}</Title>
                            <div className="ur-${modName}-${pageName}-step-content">

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

}


export default connect(
    ${modName|upper}${pageName|upper}View,
    createSelector(
        [],
        function () {
            return {
                act: false ? 'edit' : 'create'
            };
        }
    ),
    actions
);
