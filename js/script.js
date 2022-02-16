console.log('pobierz-dane-po-kliknieciu-przycisku-jquery');

$(document).ready(function() {
    // console.log('jQuery.ready');
    $('#get-data').click(function() {
        // console.log('click #get-data');




// Wariant 1 $.get()
    // $.get('https://akademia108.pl/api/ajax/get-post.php')
    // .done(function(data) {
    //     // console.log(data);

    //     let pId = $('<p></p>').text(`Post ID: ${data.id}`);
    //     let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
    //     let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
    //     let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
    //     let hr = $(`<hr/>`);

    //     let jqBody = $('body');
    

    //     jqBody.append(pId);
    //     jqBody.append(pUserId);
    //     jqBody.append(pTitle);
    //     jqBody.append(pBody);
    //     jqBody.append(hr);

    //     console.log(data);

    // })

    // .fail(function(error){
    //     console.log(error);
    // })





// Wariant 2 $.getJSON()

    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
    .done(function(data) {
        // console.log(data);

        let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
        let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
        let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
        let hr = $(`<hr/>`);

        let jqBody = $('body');
    

        jqBody.append(pId);
        jqBody.append(pUserId);
        jqBody.append(pTitle);
        jqBody.append(pBody);
        jqBody.append(hr);

        console.log(data);

    })

    .fail(function(error){
        console.log(error);
    })
    });
});


