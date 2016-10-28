angular.module('owmHistory', [])
    .factory('owmHistory', function() {
        var historyQueue = [];
        return {
            push: function(entry) {
                historyQueue.push(entry);
            },
            list: function() {
                return historyQueue;
            }
        };
    })
    .controller('HistoryCtrl', ['owmHistory', '$scope', function(owmHistory, $scope) {
        var vm = this;
        $scope.$watchCollection(
            function() {
                return owmHistory.list();
            },
            function(oldListings, newListings) {
                vm.listings = newListings;
            }
        );
    }]);