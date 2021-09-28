//$("p").hide();

$(".amazing").hide();

// Document ready event: prevent jQuery from running before the document is done loading

// $(document).ready(() => {    // arrow function
//     $("p").hide()
// })

//Event

// $(document).ready(() => {
//     $("p").click(function() {
//         $(this).hide();
//     })
// })

// CSS

// $(document).ready(()=>{
//   $("p").click(function(){
//       $(this).addClass("blue");   // this is addClass and there is remove class and toggleClass(). toggleClass can switch between add remove class
//   })  
// })

// $(document).ready(()=>{
//     $("p").click(function (){
//         $(this).toggleClass("blue");
//     })
// })

// css() method

// $(document).ready(()=>{
//     $("p").click(function (){
//         $(this).css("color","orange")
//     })
// })


// jQuery Examples

$(document).ready(() => {
    $("p").hover(function () {
        $(this).css("font-family", "Times New Roman");   // on hover in
    }, function () {
        $(this).css("font-family", "Georgia"); // on hover out
    })
})

// Example 2

$(document).ready(() => {
    $("button").click(function () {
        $(".pets").hide();
    });
}); // hide all pets img

// Example 3

//When a user double clicks on an element with an id of #rainbows, an alert will appear saying "You double-clicked me!".

$(document).ready(()=>{
    $("#rainbows").dblclick(function (){
        alert("You double-clicked Me!");
    })
})

// Example 4

//This will change the background color of the inputs to lightblue after the user clicks into an input.

$(document).ready(()=>{
    $("input").focus(function (){
        $(this).css("background-color","lightblue");
    })
})

// Example 5

//This will change the font color to red after you have released a key that was pressed. 
// You can hold the key down for as long as you would like, 
// but the color won't change until you release it. Once you release it, all letters will be red.


$(document).ready(()=>{
    $("input").keyup(function(){
        $(this).css("color","red");
    })
})