window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    function keyboard(event){
        console.log ("keyboard pressed")

        if(event.key == "1"){
            window.location.replace("../3_Frankenstein/index.html")
        }else if (event.key == "2"){
            window.location.replace("../MainFloor/index.html")
        }
    }

    $(window).keypress(keyboard);

    function openNote(){
        $(".body-text").toggleClass("hidden")
    }

    $(".note").click(openNote);    
    $(".body-text").click(openNote);

    function openTitle(){
        $(".header-text").toggleClass("hidden")
    }

    $(".note").click(openTitle);    
    $(".header-text").click(openTitle);

    function openLink(){
        $(".link").toggleClass("hidden")
    }

    $(".note").click(openLink);    
    $(".link").click(openLink);
}