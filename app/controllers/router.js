/**
 * 文件说明: 配置路由
 * 详细描述:
 * 创建者  : huxb
 * 创建时间: 2016/8/26
 * 变更记录:
 */
var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.use('/', router);
};

router.get('/actives/index', function(req, res) {
    return res.render('index');
});
