Router.route('/post_eating', 'post_eating');

Template.post_eating.helpers({
    isLogin: function() {
        if(Meteor.user() === null || Meteor.user() === undefined) {
            return false;
        }
        else return true;
    },

    boards_e: function() {
        var total = Boards_eating.find({}).fetch().length;
        return Boards_eating.find({}).fetch();
    },
    글번호 : function(){
        return Boards_eating.find().fetch()[0].글번호;
    },
    글제목 : function(){
        return Boards_eating.find().fetch()[0].글제목;
    },
    조회수 : function(){
        return Boards_eating.find().fetch()[0].조회수;
    },
    날짜 : function(){
        return Boards_eating.find().fetch()[0].날짜;
    }
});