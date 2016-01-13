Router.route('/post_studying', 'post_studying');

Template.post_studying.helpers({
    isLogin: function() {
        if(Meteor.user() === null || Meteor.user() === undefined) {
            return false;
        }
        else return true;
    },

    boards_s: function() {
        var total = Boards_studying.find({}).fetch().length;
        return Boards_studying.find({}).fetch();
    },
    글번호 : function(){
        return Boards_studying.find().fetch()[0].글번호;
    },
    글제목 : function(){
        return Boards_studying.find().fetch()[0].글제목;
    },
    조회수 : function(){
        return Boards_studying.find().fetch()[0].조회수;
    },
    날짜 : function(){
        return Boards_studying.find().fetch()[0].날짜;
    }
});