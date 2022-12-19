let circleContent = $(".circle");
let rectContent = $(".rect");
let formContent = $(".form");

$('#start').click(function (){
    circleContent.addClass("circleFull")
    rectContent.addClass("rectFull")
    formContent.addClass("formFull")
})

$('#end').click(function (){
    circleContent.removeClass("circleFull")
    rectContent.removeClass("rectFull")
    formContent.removeClass("formFull")
})


$('.circle').on('click', function (event){
    $(this).css("background-color", "red")
})


$('.rect').on('click', function (event){
    $(this).css("background-color", "red")
    $('#one').children().css("background-color", "red")
})

// for(let i = 0; i < checkCircle.length; i++){
//     checkCircle.click(function (){
//         console.log("test")
//         checkCircle[i].css("background-color", "red")
//     })
// }