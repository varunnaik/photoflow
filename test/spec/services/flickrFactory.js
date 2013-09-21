'use strict';

describe('Service: flickrFactory', function () {

  // load the service's module
  beforeEach(module('photoflowApp'));

  // instantiate service
  var flickrFactory;
  beforeEach(inject(function (_flickrFactory_) {
    flickrFactory = _flickrFactory_;
  }));

  it('should do something', function () {
    expect(!!flickrFactory).toBe(true);
  });

});
