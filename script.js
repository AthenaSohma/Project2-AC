window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    function keyboard(event){
        console.log ("keyboard pressed")

        if(event.key == "1"){
            window.location.replace("MainFloor/index.html")
        }else if (event.key == "2"){
            window.location.replace("../Corn_LR/index.html")
        }else if (event.key == "3"){
            window.location.replace("8_Lacrimosa/index.html")
        }else if (event.key == "4"){
            window.location.replace("2_Norwood/index.html")
        }
    }

    $(window).keypress(keyboard);
}