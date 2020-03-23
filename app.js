var koa = require('koa');
var controller = require('koa-route');
var app = new koa();

/*var views= require('co-views');
var render = views('./view',{
    map:{ html : 'ejs'}
});*/

var koa_static = require('koa-static-server');
app.use(koa_static({
    rootDir:'./static/',
    rootPath:'/s/',
    maxage : 0
}));



/*app.use(function*(){
    this.body=yield render('test',{title: 'title_test'})
});*/
app.listen(3002);
