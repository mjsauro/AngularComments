app.controller("SuggestionController", ['$scope', '$routeParams', 'suggestions', function ($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function () {
        $scope.post.comments.push({
            body: $scope.comment,
            upvotes: 0
        });
    }
    $scope.upVote = function (index) {
        $scope.post.comments[index].upvotes += 1;


    };
}])
