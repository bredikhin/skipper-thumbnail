'use strict';

require('should');

var Transform = require('stream').Transform;
var Receiver = require('../')(1, 1);

describe('Receiver', function() {
  it('is a transform stream', function(done) {
    Receiver.should.be.an.instanceOf(Transform);

    done();
  });
});
