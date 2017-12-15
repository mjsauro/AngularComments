app.factory('upvote', [function () {

    var vote = function (post) {

        post.upvotes += 1;

    }
    return vote;
}])
