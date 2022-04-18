// variables
var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>ABOUT</h1>`;
var galleryContent = `<h1>GALLERY</h1>`;
var blogContent = `<h1>BLOG</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

export var myName = "Pierce";

// 
// export function modelPageName(pgName)
export function modelPageName(pageName) {

    // replace font color for nav a on homepage
    if (pageName == "homeContent") {
        $("nav a").removeClass("blackText").addClass("whiteText");
        $("hr").removeClass("black-hr").addClass("white-hr");
        // Change image in nav src using attr
        $("nav img").attr("src", "images/logo/logo-white.svg");
    } else {
        $("nav a").removeClass("whiteText").addClass("blackText");
        $("hr").removeClass("white-hr").addClass("black-hr");
        // Change image src in nav using attr
        $("nav img").attr("src", "images/logo/logo-black.svg")
    }

    // try & catch to catch any errors
    try {
        eval(pageName);
        $("#app").html(eval(pageName))
    }
    catch (e) {
        console.log("hello", e)
    }
}