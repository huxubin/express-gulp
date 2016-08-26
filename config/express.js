/**
 * 文件说明: express文件
 * 详细描述:
 * 创建者  : 胡许彬
 * 创建时间: 2016/8/26
 * 变更记录:
 */
var express = require('express');
var glob = require('glob');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var config = require('./config');

module.exports = function(app, config) {
    var controllers;
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'ejs');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(compress());
    app.use(express["static"](config.root + '/public', {
        maxAge: 3600000
    }));
    app.use(methodOverride());

    controllers = glob.sync(config.root + '/app/controllers/**/*.js');
    controllers.forEach(function(controller) {
        return require(controller)(app);
    });
};
