window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    function keyboard(event){
        console.log ("keyboard pressed")

        if(event.key == "1"){
            window.location.replace("../7_FreakingOut/index.html")
        }else if (event.key == "2"){
            window.location.replace("../5_Bones/index.html")
        }else if (event.key == "3"){
            window.location.replace("../MainFloor/index.html")
        }
    }

    $(window).keypress(keyboard);

    function openRedacted(){
        window.location.replace("../REDACTED/index.html")
    }

    $(".redacted").click(openRedacted);    
}