/**
 * 文件说明: home配置路由文件
 * 详细描述:
 * 创建者  : 胡许彬
 * 创建时间: 2016/8/26
 * 变更记录:
 */
var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.use('/', router);
};

router.get('/actives/bigbang', function(req, res) {
    return res.render('bigbang');
});
