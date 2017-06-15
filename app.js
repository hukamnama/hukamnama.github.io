var pageExecute = {

    fileContents:"Null",
    pagePrefix:"Null",
    slides:"Null",

    init: function () {
        $.ajax({
            url: "http://shinecoachings.com/~aeon/hukamnama/hukamnama_eng/paragraph.txt",
            async: false,
            success: function (data){
                pageExecute.fileContents = data;
            }
        });
    }
};
