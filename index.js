//random image
var backgrounds = new Array('emiBackground.jpg', 'emiBackground2.jpg', 'emiBackground3.jpg', 'emiBackground4.jpg', 'emiBackground5.gif', 'emiBackground6.jpg', 'emiBackground7.jpg');

    function SetImage() {
        var random = backgrounds[Math.floor(Math.random() * backgrounds.length)];

        random = 'url(assets/' + random + ')';
        $('#emiImageChange').css('background-image', random);

    };

function hide() {

let menu = document.getElementById("page-menu");
    menu.style.display = "none";
}

function show() {
    let menu = document.getElementById("page-menu");
    menu.style.display = "block";
    let features = document.getElementById("page-features");
    features.style.display = "none";
    let about = document.getElementById("page-about");
    about.style.display = "none";
    let commands = document.getElementById("page-commands");
    commands.style.display = "none";
    
}


// function page(page) {
//     hide();
// let content = document.getElementById("content");
//     let pages = document.getElementById("home-"+page);
    
//         content.innerHTML = pages.innerHTML;
//     }; page("home");

function features(){
    hide();

    let show = document.getElementById("page-features")
    show.style.display = "block";
}

function about(){
    hide();

    let show = document.getElementById("page-about")
    show.style.display = "block";
}

function commands(){
    hide();

    let show = document.getElementById("page-commands")
    show.style.display = "block";
}