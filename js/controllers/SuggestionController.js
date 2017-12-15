app.controller("SuggestionController", ['$scope', '$routeParams', 'suggestions', 'upvote', function ($scope, $routeParams, suggestions, upvote) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function () {
        $scope.post.comments.push({
            body: $scope.comment,
            upvotes: 0
        });
    }

    $scope.upVoteComment = function (index) {
        $scope.post.comments[index].upvotes += 1;


    };
    $scope.upVote = upvote;

}])
