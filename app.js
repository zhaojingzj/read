var koa = require('koa');
var controller = require('koa-route');
var app = new koa();

var service = require('./service/webAppService')

var views= require('co-views');
var render = views('./view',{
    map:{ html : 'ejs'}
});

var koa_static = require('koa-static-server');
app.use(koa_static({
    rootDir:'./static/',
    rootPath:'/s/',
    maxage : 0
}));

app.use(controller.get('/route_test',function*() {
    this.set('Cache-Control','no-cache');
    this.body = 'hello koa';
}));


app.use(function*() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('test',{title:'title_test'});
});


/* 上面25-28行，添加路由就运行不了
app.use(controller.get('/ejs_test',function*() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('test',{title:'title_test'});
}));
*/

/*app.use(function *() {
    this.set('Cache-Control','no-cache');
    var querystring = require('querystring');
    var params = querystring.parse(this.req._parsedUrl.query);
    var start = params.start;
    var end = params.end;
    var keyword = params.keyword;
    this.body=yield service.get_search_data(start,end,keyword);
});*/

app.listen(3001);
