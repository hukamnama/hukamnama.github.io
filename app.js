var pageExecute = {

    fileContents:"Null",
    pagePrefix:"Null",
    slides:"Null",

    init: function () {
        $.ajax({
            url: "paragraph.txt",
            async: false,
            success: function (data){
                pageExecute.fileContents = data;
            }
        });
    }
};
