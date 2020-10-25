window.addEventListener("DOMContentLoaded", function(e) {

    var tmp = (document.getElementsByTagName("title")[0].innerHTML).split(" | ");
    var title = tmp[tmp.length -1];
    var date = document.getElementsByClassName("date")[0].innerHTML;
    var speaker = document.getElementsByClassName("speaker")[0].innerHTML;

    localStorage.setItem("title", title)
    localStorage.setItem("date", date);
    localStorage.setItem("speaker", speaker);

    document.getElementsByClassName("order-link")[0].addEventListener("click", function(order){
        const url = window.location.href.replace("toobin.html", "../tickets.html");
        window.location.href = url;
    });
});



