// importing files from model.js
import * as MODEL from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";

    if (pageName == "") {
        pageContent = "homeContent";
    }

    MODEL.modelPageName(pageContent);
}

// Listens and write console.log when something is pressed
function initListeners() {
    $(window).on("hashchange", route)
}

$(document).ready(function () {
    // console.log("Pierce");
    // console.log(MODEL.myName)
    initListeners();
});