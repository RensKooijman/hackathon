$(document).ready(() => {
    $("#hartjeIndex").bind('click', ()=>window.location.href="pages/infopage.html");
    setTimeout(() => {
        $("#hartjeIndex").remove();
        let btn = document.createElement('button');
        btn.textContent  = 'Doorgaan';
        $("section.indexcontainerhartje").append(btn);
        $("button").addClass("doorgaan-btn");
        $("button").bind('click', ()=>{window.location.href="pages/upload.html"});
      }, 4000);
});