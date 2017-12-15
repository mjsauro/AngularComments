app.controller('HomeController', [
'$scope',
'suggestions', 'upvote',

function ($scope, suggestions, upvote) {
        $scope.posts = suggestions.posts;
        $scope.addSuggestion = function () {
            if (!$scope.title || $scope.title === "") {
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                upvotes: 0,
            });

            $scope.title = "";
        };
        $scope.upVote = upvote;

        $scope.comments = [];
}]);
