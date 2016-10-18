/**
 * Created by hxsd on 2016/9/28.
 */
var myapp=angular.module("myapp",["ionic"]);
//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state()
    $urlRouterProvider.otherwise("/home")
})