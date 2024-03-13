window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    function keyboard(event){
        console.log ("keyboard pressed")

        if(event.key == "1"){
            window.location.replace("../Upstairs/index.html")
        }else if (event.key == "2"){
            window.location.replace("../6_Wife/index.html")
        }else if (event.key == "3"){
            window.location.replace("../9_Ulvar/index.html")
        }else if (event.key == "4"){
            window.location.replace("../index.html")
        }
    }

    $(window).keypress(keyboard);
}