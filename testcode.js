/* jslint node: true */
(function(index){
    'use strict';
    // the triumvirate of interesting libraries I want to show examples on using...
    var Q = require('q'),
        _ = require('lodash'),
        async = require('async');

    index.doSomething = function() {
        var deferred = Q.defer();
        setTimeout(function() {
            deferred.resolve("doSomething");
        }, 100);
        return deferred.promise;
    };

}(module.exports));
