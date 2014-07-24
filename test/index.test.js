'use strict';

require('should');

var Transform = require('stream').Transform;
var receiver = require('../')(1, 1);
var Resizer = require('image-resize-stream');

describe('Receiver', function() {
  it('is a transform stream in the object mode', function(done) {
    receiver.should.be.an.instanceOf(Transform);
    receiver._writableState.objectMode.should.be.Ok;
    receiver._readableState.objectMode.should.be.Ok;

    done();
  });

  it('has a resizing stream attached', function(done) {
    receiver.should.have.a.property('_resizer');
    receiver._resizer.should.be.Ok;

    done();
  });
});
