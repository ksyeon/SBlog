Router.route('/posting', 'posting');

Template.posting.events({
    "click #write": function(evt, tmpl) {
        if(!Meteor.user()){
            return alert('로그인을 해주세요!');
        }

        var obj = {};
        obj.카테고리 = $('#category').val();
        obj.글제목 = $('#title').val();
        obj.본문 = $('#contents').val();
        if(obj.글제목.length <= 0 || obj.본문.length <= 0) {
            return alert('제목과 내용을 모두 입력해주세요!');
        }

        var count = 0; // 조회수 카운트
        //if(write.click()) { // write -> 클릭할 때마다 조회수 증가
        //    count++;
        //}
        obj.조회수 = count++;

        var time = new Date();
        obj.날짜 = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
            + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();

        //console.log($('#category').val());
        if($('#category').val() === "Daily Notes") {
            Boards_daily.insert(obj);
        }
        else if($('#category').val() === "Studying"){
            Boards_studying.insert(obj);
        }
        else if($('#category').val() === "Eating"){
            Boards_eating.insert(obj);
        }
        else if($('#category').val() === "Travel"){
            Boards_travel.insert(obj);
        }

        Router.go('/');
    }
});