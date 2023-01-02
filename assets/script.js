function navResponsive(x) {
    x.classList.toggle("change-bar")
    var y = document.getElementById("navResponsive");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

var typed = new Typed(".typing",{
    strings:["Mathematics Student","Junior Data Analyst","","Junior Data Scientist","","Junior Front-end Web Developer","Mathematics and Japanese Language Tutor",""],
    typeSpeed:25,
    BackSpeed:50,
    loop:true
})