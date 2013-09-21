'use strict';

describe('Service: photobucketFactory', function () {

  // load the service's module
  beforeEach(module('photoflowApp'));

  // instantiate service
  var photobucketFactory;
  beforeEach(inject(function (_photobucketFactory_) {
    photobucketFactory = _photobucketFactory_;
  }));

  it('should do something', function () {
    expect(!!photobucketFactory).toBe(true);
  });

});
