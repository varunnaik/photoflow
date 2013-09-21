'use strict';

describe('Service: photofactory', function () {

  // load the service's module
  beforeEach(module('photoflowApp'));

  // instantiate service
  var photofactory;
  beforeEach(inject(function (_photofactory_) {
    photofactory = _photofactory_;
  }));

  it('should do something', function () {
    expect(!!photofactory).toBe(true);
  });

});
