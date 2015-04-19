$(document).ready(function () {
    function get_questions (){
            $.get('http://prm.bhakosi.com/queries.php', {query: 'questions'}, function (data) {
            $('#questions').html(data);
        });
    }
    
    get_questions();
    
    $(document.body).on('click', '#questions li a', function (e) {
        var id = $(this).data('id');
            e.preventDefault();
            $('#responses').html('<img src="imgs/load.gif" id="load">');
        
            $('#responses').html('<img src="imgs/load.gif" id="load">');
        $.get('http://prm.bhakosi.com/queries.php', {query: 'answers', qid: id}, function (data) {
            $('#responses').html(data);
        });
    });
    
    $('#pq').on('submit', function (e) {
        var question = $('#new_question').val(),
            name = $('#name').val();
        e.preventDefault();
        $('#responses').html('<img src="imgs/load.gif" id="load">');
        $.get('http://prm.bhakosi.com/queries.php', {action: 'post_question', question: question, user: name}, function (data) {
            if(data){
                $('#responses').html(data);
                $('#pq').trigger("reset");
            }
        });
    });
    
    setInterval(function (){
        get_questions();
    }, 60000);
});