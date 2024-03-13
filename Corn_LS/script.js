window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    function keyboard(event){
        console.log ("keyboard pressed")

        if(event.key == "1"){
            window.location.replace("../10_Children/index.html")
        }else if (event.key == "2"){
            window.location.replace("../4_Ironbark/index.html")
        }else if (event.key == "3"){
            window.location.replace("../Corn_LR/index.html")
        }
    }

    $(window).keypress(keyboard); 
}