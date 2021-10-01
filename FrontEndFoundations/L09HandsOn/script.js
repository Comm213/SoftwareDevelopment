
$(document).ready(()=>{
    $(window).load(function (event){
        $.getJSON('einstein.json',function(ei){
            $('#info').html('<p>Name: '+ei.name+'</p>');
            $('#info').append('<p>Birthday: '+ei.birthday+'</p>');
        });
    });
});

function display(){
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            document.getElementById("bio").innerHTML = myObj.bio;
        }
    };
    newRequest.open("GET", "einstein.json", true);
    newRequest.send();
}