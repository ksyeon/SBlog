Router.route('/post_daily', 'post_daily');

Template.post_daily.helpers({
    isLogin: function() {
        if(Meteor.user() === null || Meteor.user() === undefined) {
            return false;
        }
        else return true;
    },

    boards_d: function() {
        var total = Boards_daily.find({}).fetch().length;

    }
});

Template.post_daily.events({

});
