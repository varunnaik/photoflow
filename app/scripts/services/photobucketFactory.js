'use strict';

angular.module('photoflowApp')
    .factory('photobucketFactory', function () {
        // Service logic
        // ...

        // lastUpdateTime: Integer: (Timestamp): When did we last update
        // the latest photos stream?
        var lastUpdateTime = null;

        // minUpdateInterval: Integer: (Ms): What is the minimum duration
        // between two calls to the API?
        var minUpdateInterval = null;

        // lastAPICallTime: Integer: (Timestamp): When did we last make any
        // call to the API?
        var lastAPICallTime = null;

        // lastCallStatus: Integer: Status of the last HTTP call we made
        var lastCallStatus = null;

        var canMakeAPICall = function() {
            // Uses the internal variables defined above to decide if we are
            // allowed to make an API call right now. Returns false if not
            // allowed, true otherwise.

            // Logic for Photobucket (Based on Photobucket API Rate limiting):
        };

        // Public API here
        return {
            getLatest: function () {
                // Returns the latest photos since the last update, if permitted
                return meaningOfLife;
            },
            getAll: function(tags) {
                // Gets all tags (If supported by service provider)

            },
            getTag: function(tag) {

            },
            supportsMultiTagRetrieval: function() {
                // Returns true if the service provider supports retrieving
                // multiple tags at once, false if tags must be searched for
                // one at a time.

                return false;
            }
        };
    });
