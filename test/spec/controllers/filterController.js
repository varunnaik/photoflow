'use strict';

describe('Controller: FiltercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('photoflowApp'));

  var FiltercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FiltercontrollerCtrl = $controller('FiltercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
