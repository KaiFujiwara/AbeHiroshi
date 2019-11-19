const element = document.querySelector("frame:nth-child(2)");



setTimeout(() => {
    if (element.contentDocument.querySelector("body h1")　/*&& element.contentDocument.querySelector("body h2").indexOf("阿部") != -1*/) {
        element.contentDocument.querySelector("body h1").style.setProperty("display", "none");
    }
    
    if (element.contentDocument.querySelector("body h2")　/*&& element.contentDocument.querySelector("body h2").indexOf("阿部") != -1*/) {
        element.contentDocument.querySelector("body h2").style.setProperty("display", "none");
    }


    element.contentDocument.querySelector("body").style.setProperty("background", "none");

    if (element.contentDocument.querySelector("body table tbody tr:nth-child(1) tbody tr:nth-child(6) td")) {
        element.contentDocument.querySelector("body table tbody tr:nth-child(1) tbody tr:nth-child(6) td").style.setProperty("display", "none");
    }

    if (element.contentDocument.querySelector("body img")) {
        element.contentDocument.querySelector("body img").style.setProperty("display", "none");
    }



}, 200);
