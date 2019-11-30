window.addEventListener("scroll", runOnScroll);

function runOnScroll(){
    $('html,body').animate({scrollTop: 0},1);
    window.removeEventListener("scroll", runOnScroll);
}