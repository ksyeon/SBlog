Router.route('/posting', 'posting');

Template.posting.events({
    "click #write": function(evt, tmpl) {
        //if(!Meteor.user()){
        //    return alert('로그인을 해주세요!');
        //}

        var obj = {};
        obj.카테고리 = $('#category').val();
        obj.글제목 = $('#title').val();
        obj.본문 = $('#contents').val();
        if(obj.글제목.length <= 0 || obj.본문.length <= 0) {
            return alert('제목과 내용을 모두 입력해주세요!');
        }
        var count = 0; // 조회수 카운트
        if(write.click()) {
            count++;
        }
        obj.조회수 = count;
        obj.날짜 = new Date();

        if($('#category').val() === 'post_daily') {
            Boards_daily.insert(obj);
        }
        else if($('#category').val() === 'post_study'){
            Boards_studying.insert(obj);
        }
        else if($('#category').val() === 'post_eat'){
            Boards_eating.insert(obj);
        }
        else if($('#category').val() === 'post_travel'){
            Boards_travel.insert(obj);
        }

        Router.go('/');
    }
});