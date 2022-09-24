// mobile menu
function openNav(){
    document.getElementById("sidenave").style.width="50%";
};
function closeNav(){
    document.getElementById("sidenave").style.width="0%";
};

$(document).ready(function(){
    // Safari smoth scroll
    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },200,
                function(){
                    window.location.hash = hash;
                }
            );
        }
    });

    // stikey menu
    $(".js-stikey-menu").waypoint(function(derection){
        if(derection == "down"){
            $(".menu-area").addClass("stikey");
        }else{
            $(".menu-area").removeClass("stikey");
        };
    })
});