Router.route('/', 'slog_index');

Template.slog_index.events({
    "click[name=loginButtons]": function(evt, tmpl) {
        var ID = $('#ID').val();
        var PW = $('#PW').val();

        Meteor.loginWithPassword(ID, PW);
    }
});