'use strict';

var should = require('chai').should();
var guldencore = require('../');

describe('#versionGuard', function() {
  it('global._guldencore should be defined', function() {
    should.equal(global._guldencore, guldencore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      guldencore.versionGuard('version');
    }).should.throw('More than one instance of guldencore');
  });
});
