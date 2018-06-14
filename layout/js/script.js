var header = document.querySelector('.wrapperHead');
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
        //console.log(event.pageY);
        header.classList.remove("headerHidden");
    }

});