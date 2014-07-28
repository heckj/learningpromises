/*jslint node: true */
module.exports = (function() {
    'use strict';
    var nconf = require('nconf');
    nconf.overrides({'a': 1});
    console.log("NCONF INDEX.JS ['a'] is "+nconf.get('a'));
    var testy = require('./testcode');
}());
