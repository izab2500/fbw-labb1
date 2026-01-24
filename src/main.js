//css 
import "./css/common.css"
import "./css/hem.css"
import "./css/bilder.css"
import "./css/arbetsprocess.css"


if (window.matchMedia("(max-width:670px)").matches) {
    //dom referenser
    const icon = document.querySelector("#icon");
    const topBar = icon.querySelector(".top-bar");
    const middleBar = icon.querySelector(".middle-bar");
    const bottomBar = icon.querySelector(".bottom-bar");
    const nav = document.querySelector("#nav");
    const overlay = document.querySelector("#overlay");

    console.log(overlay)
    // visa eller dölj ikon (hamburger eller X), nav och overlay
    function toggle(evt) {
        const target = evt.target.closest("#icon")
        if (!target) return;
        // animera topbar 45 grader medurs (hamburger meny - översta streck)
        topBar.classList.toggle("top-bar-js");
        // visa/dölj middlebar
        middleBar.classList.toggle("middle-bar-js");
        //animera bottombar 45 grader moturs
        bottomBar.classList.toggle("bottom-bar-js");
        //visa/dölj overlay och nav
        overlay.classList.toggle("overlay");
        nav.classList.toggle("hide-left");
    }

    icon.addEventListener("click", toggle)
}