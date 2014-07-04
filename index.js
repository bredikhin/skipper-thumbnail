'use strict';

var util = require('util');
var Transform = require('stream').Transform;
var Resizer = require('image-resize-stream');

module.exports = Receiver;

function Receiver(width, height, options) {
  if (!(this instanceof Receiver))
    return new Receiver(width, height, options);

  this._resizer = new Resizer(width, height, options);

  Transform.call(this, {objectMode: true});
}

util.inherits(Receiver, Transform);

Receiver.prototype._transform = function(file, enc, cb) {
  var resized = file.pipe(this._resizer);
  resized.filename = file.filename;
  this.push(resized);
  
  cb();
};
