'use strict';

angular.module('photoflowApp')
    .factory('photofactory', function () {
        // Service logic
        // Grab data from each supported service.
        // Keep a unified data model for use in the UI
        // Manage all updates - periodic (Automatic) and manual

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    });
