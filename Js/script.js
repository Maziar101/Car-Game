$(document).ready(() => {
    $("#go").on("click" , ()=>{
        $("#car").css({"transform":"translateX(230%)","transition":"3s transform"});
    });
    $("#back").on("click" , ()=>{
        $("#car").css({"transform":"translateX(-10%)","transition":"3s transform"});
    });
    $("#stop").on("click" , ()=>{
        var carImg = document.getElementById("car");
        carImg.style.transform = window.getComputedStyle(carImg).getPropertyValue("transform");
        carImg.style.transition = "none";
    });
});
