$(document).ready(function () {
    $.get('http://prm.bhakosi.com/queries.php', {query: 'questions'}, function (data) {
        $('#questions').append(data);
    });
    
    $(document.body).on('click', '#questions li a', function (e) {
        var id = $(this).data('id');
            e.preventDefault();
            
        $.get('http://prm.bhakosi.com/queries.php', {query: 'answers', qid: id}, function (data) {
            $('#responses').html(data);
        });
    });
});