'use strict';

/**
 * @ngdoc overview
 * @name zfwApp
 * @description
 * # zfwApp
 *
 * Main module of the application.
 */
// console.log($('.gridManager'))
// $('.gridManager').css('border', "solid 1px blue")

angular.module('zfwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/gridManager');
    $stateProvider
        // .state('gridManager', {
        //     url: '/gridManager',
        //     views: {
        //         '': {
        //             templateUrl: 'views/gridManager.html'
        //         },
        //         'left@gridManager': {
        //             templateUrl: 'views/gridLeft.html'
        //         },
        //         'right@gridManager': {
        //             templateUrl: 'views/gridRight.html'
        //         }
        //     }
        // })
        .state('gridManager',{
            url: '/gridManager',
            views:{
            "":{templateUrl: 'views/gridManager.html'},
            'left@gridManager': {
                    templateUrl: 'views/gridLeft.html'
                },
            'right@gridManager': {
                    templateUrl: 'views/wangge1.html'
                }
            // "header@content":{templateUrl: 'partials/header.html'},
            }
        })
        .state('gridManager.wangge1',{
        url: 'wangge1',
        views:{
        "right@gridManager":{templateUrl: 'views/wangge1.html'}
        }
        })
        .state('gridManager.wangge2',{
        url: 'wangge2',
        views:{
        "right@gridManager":{templateUrl: 'views/wangge2.html'}
        }
        })
        .state('gridManager.wangge3',{
        url:'wangge3',
        views:{
        "right@gridManager":{templateUrl: 'views/wangge3.html'}
        }
        })
        .state('jcsj', {
            url: '/jcsj',
            views:{
            "":{templateUrl: 'views/gridManager.html'},
            'left@jcsj': {
                    templateUrl: 'views/bascLeft.html'
                },
            'right@jcsj': {
                    templateUrl: 'views/bascRight.html'
                }
            }
        })
        .state('jcsj.fwxx', {
            url: "/fwxx",
            templateUrl: "views/fwxx.html"
        })
        .state('jcsj.fwxx.xqcs', {
            url: "/xqcs",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/xqcs.html'
                }
            }
            
        })
        .state('jcsj.fwxx.ldxx', {
            url: "/ldxx",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/ldxx.html'
                }
            }
            
        })
        .state('jcsj.fwxx.fwxx2', {
            url: "/fwxx2",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/fwxx2.html'
                }
            }
            
        })
        .state('jcsj.fwxx.dwxx', {
            url: "/dwxx",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/dwxx.html'
                }
            }
            
        })
        .state('jcsj.fwxx.mdxx', {
            url: "/mdxx",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/mdxx.html'
                }
            }
            
        })
        .state('jcsj.fwxx.xxxx', {
            url: "/xxxx",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/xxxx.html'
                }
            }
            
        })
        .state('jcsj.fwxx.yyxx', {
            url: "/yyxx",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/yyxx.html'
                }
            }
            
        })
        .state('jcsj.fwxx.tshy', {
            url: "/tshy",
            views: {
                'right@jcsj': {
                    templateUrl: 'views/tshy.html'
                }
            }
            
        })
        .state('jcsj.rkxx', {
            url: "/rkxx",
            templateUrl: "views/rkxx.html"
        })
        .state('jcsj.ywsl', {
            url: "/ywsl",
            templateUrl: "views/ywsl.html"
        })
        .state('jcsj.zdrq', {
            url: "/zdrq",
            templateUrl: "views/zdrq.html"
        })
        .state('jcsj.tjfx', {
            url: "/tjfx",
            templateUrl: "views/tjfx.html"
        })
        .state('lwyt', {
            url: '/lwyt',
            template: "<h1>六位一体</h1>"
        })
        .state('mdhj', {
            url: '/mdhj',
            template: "<h1>矛盾化解</h1>"
        })
        .state('sjcl', {
            url: '/sjcl',
            template: "<h1>时间处理</h1>"
        })
        .state('tzgg', {
            url: '/tzgg',
            template: "<h1>通知公告</h1>"
        })
        .state('szdt', {
            url: '/szdt',
            template: "<h1>数字地图</h1>"
        })
        .state('xtgl', {
            url: '/xtgl',
            template: "<h1>系统管理</h1>"
        })
      
  })
//   $('.gridManager').css('border', "solid 1px blue")
