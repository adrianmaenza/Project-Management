$(document).ready(function () {
    function get_questions (){
            $.get('http://prm.bhakosi.com/queries.php', {query: 'questions'}, function (data) {
            $('#questions').html(data);
            $('#questions').listview('refresh');
        });
    }
    
    get_questions();
    
    $(document.body).on('click', '#questions li a', function (e) {
        var id = $(this).data('id');
//            e.preventDefault();
            $('#atq').html('<img src="imgs/load.gif" id="load">');
        
            $('#atq').html('<img src="imgs/load.gif" id="load">');
        $.get('http://prm.bhakosi.com/queries.php', {query: 'answers', qid: id}, function (data) {
            $('#atq').html(data);
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
    });//this function posts a quetion
    
    $('#pa').on('submit', function (e) {
        var answer = $('#new_answer').val(),
            name = $('#a_name').val();
        e.preventDefault();
        $('#responses').html('<img src="imgs/load.gif" id="load">');
        $.get('http://prm.bhakosi.com/queries.php', {action: 'post_answer', answer: answer, user: name, qid: qid}, function (data) {
            if(data){
                $('#feedback').html(data);
                $('#pa').trigger("reset");
            }
        });
    });//this function posts an answer
    
        setInterval(function (){
            get_questions();
        }, 10000);
    
    $('#refresh').click(function (e) {
        e.preventDefault();
        get_questions();
    });
});