var header = document.querySelector('.wrapperHead');
var menuBurguer = document.querySelector('.burguer');
var savePosScroll = 133;

document.addEventListener('scroll', function(event) {
    console.log(event.pageY);
    if (event.pageY > 133) {
        header.classList.add("headerHidden");
        if (event.pageY > savePosScroll) {
            savePosScroll = event.pageY;
            header.classList.remove("headerActive");
        } else {
            header.classList.add("headerActive");
            savePosScroll = event.pageY;
        }
    } else  {
        header.classList.remove("headerHidden");
    }

});

menuBurguer.addEventListener('click', function () {
    var nav = document.querySelector("#mainav");
    var close = document.querySelector(".close");
    nav.style.left = 0;
    close.addEventListener("click", function () {
        nav.style.left = "";
    })
});