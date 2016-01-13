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
        return Boards_daily.find({}).fetch();
    },
    글번호 : function(){
        return Boards_daily.find().fetch()[0].글번호;
    },
    글제목 : function(){
        return Boards_daily.find().fetch()[0].글제목;
    },
    조회수 : function(){
        return Boards_daily.find().fetch()[0].조회수;
    },
    날짜 : function(){
        return Boards_daily.find().fetch()[0].날짜;
    }
});

Template.post_daily.events({

});
