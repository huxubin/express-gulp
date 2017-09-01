/**
 * 文件说明: 配置文件
 * 详细描述:
 * 创建者  : huxb
 * 创建时间: 2016/8/26
 * 变更记录:
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

// 配置请求地址
var config = {
    development:{    // 开发环境配置
        root: rootPath,
        app: {
            name: 'html5'
        },
        options: {
            host: 'http://stg1.v5time.net',
            port: 80
        },
        port: 3000
    },
    test:{  // 测试环境配置
    },
    production:{ // 生产环境配置
    }
};
module.exports = config[env];
