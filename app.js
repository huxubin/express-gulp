/**
 * 文件说明: app文件
 * 详细描述:
 * 创建者  : 胡许彬
 * 创建时间: 2016/8/26
 * 变更记录:
 */
var express = require('express'),
    config = require('./config/config');
var app = express();

require('./config/express')(app,config);

app.listen(config.port);
