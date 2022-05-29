// change the top navbar on scroll
var body = document.querySelector('body');
window.onscroll = function () {
    if (window.pageYOffset > 85) { // NOTE: magic number, top navbar height
        body.classList.add('shrank');
    } else {
        body.classList.remove('shrank');
    }
}