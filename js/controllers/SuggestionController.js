app.controller("SuggestionController", ['$scope', '$routeParams', 'suggestions', 'upvote', function ($scope, $routeParams, suggestions, upvote) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function () {
        if (!$scope.comment || $scope.comment === "") {
            return;
        }
        $scope.post.comments.push({
            body: $scope.comment,
            upvotes: 0
        });
        $scope.comment = "";
    }

    $scope.upVoteComment = function (comment) {
        comment.upvotes += 1;
    };
    $scope.upVote = upvote;

}])
