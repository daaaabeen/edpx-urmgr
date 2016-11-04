/**
 * @file ${pageName}
 * @author: dabeen(lidianbin@baidu.com)
 * @date:   2016-08-29 16:45:13
 */

import {Page} from 'ei';
import View from './View';
import reducer from './reducer';
import logger from '../../common/middleware/logger';

export default Page.extend({
    view: View,
    middlewares: [logger],
    reducer,
    getInitialState(request) {

        // 初始的参数
        // const {} = request.query;

        // 初始状态
        return {};

    }
});
