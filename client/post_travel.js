Router.route('/post_travel', 'post_travel');

Template.post_travel.helpers({
    isLogin: function() {
        if(Meteor.user() === null || Meteor.user() === undefined) {
            return false;
        }
        else return true;
    },

    boards_t: function() {
        var total = Boards_travel.find({}).fetch().length;
        return Boards_travel.find({}).fetch();
    },
    글번호 : function(){
        return Boards_travel.find().fetch()[0].글번호;
    },
    글제목 : function(){
        return Boards_travel.find().fetch()[0].글제목;
    },
    조회수 : function(){
        return Boards_travel.find().fetch()[0].조회수;
    },
    날짜 : function(){
        return Boards_travel.find().fetch()[0].날짜;
    }
});