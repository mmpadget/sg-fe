'use strict';

require('./scss/main.scss');
require('./scss/base.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const ngTouch = require('angular-touch'); // eslint-disable-line
// eslint-disable-next-line
const ngAnimate = require('angular-animate');

require('@uirouter/angularjs');
require('angular-ui-bootstrap');
require('ng-file-upload');

const cfgram = angular.module(
  'cfgram',
  ['ui.router', 'ngFileUpload', 'ngTouch', 'ngAnimate', 'ui.bootstrap']
);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( path => cfgram.config(context(path)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => cfgram.controller(pascalcase(path.basename(key, '.js')),  context(key)));

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  cfgram.service(camelcase(path.basename(key, '.js')), context(key));
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  cfgram.component(camelcase(path.basename(key, '.js')), context(key));
});
