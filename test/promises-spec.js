// Created by heckj on 7/15/14.
/* jslint node: true */

(function () {
    'use strict';
    require('./helper');

    var index = require('../index.js');

    describe("Initial test", function() {
        it("should always pass", function() {
            expect(1).to.be.ok;
        });
    });

    describe("basic promises", function() {
        it("should return a promise", function() {
            var myPromise = index.doSomething();
            // myPromise should be defined
            expect(myPromise).to.be.ok;
            // and if it's a promise, then it should have a "then" on it
            expect(myPromise.then).to.be.ok;
        });
        it("should resolve the promise", function(wrapit) {
            var myPromise = index.doSomething();
            expect(myPromise).to.be.ok;
            myPromise.then(function(result) {
                expect(result).to.equal("doSomething");
                wrapit();
            }, function(err) {
                expect(err).to.be.undefined;
                wrapit();
            }).done();

        });
    });
}(module.exports));
