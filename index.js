// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

function scrollLR(objectId, direction) {
    const carousel = document.querySelector(objectId).querySelector(".scrollpane")
    const amount = carousel.children[1].offsetWidth * direction
    carousel.scrollBy(amount, 0)
    setTimeout(() => {
        if (amount > 0) {
            document.querySelector(objectId).querySelector(".Gauche").style = "opacity: 1"
            document.querySelector(objectId).querySelector(".Gauche").disabled = ""
            if (carousel.scrollLeft > carousel.scrollLeftMax - amount) {
                document.querySelector(objectId).querySelector(".Droite").style = "opacity: 0"
                document.querySelector(objectId).querySelector(".Droite").disabled = "true"
            } else {
                document.querySelector(objectId).querySelector(".Droite").style = "opacity: 1"
                document.querySelector(objectId).querySelector(".Droite").disabled = ""
            }
        } else {
            document.querySelector(objectId).querySelector(".Droite").style = "opacity: 1"
            document.querySelector(objectId).querySelector(".Droite").disabled = ""
            if (carousel.scrollLeft < -amount) {
                document.querySelector(objectId).querySelector(".Gauche").style = "opacity: 0"
                document.querySelector(objectId).querySelector(".Gauche").disabled = "true"
            } else {
                document.querySelector(objectId).querySelector(".Gauche").style = "opacity: 1"
                document.querySelector(objectId).querySelector(".Gauche").disabled = ""
            }
        }
    }, 100)
} // à réparer

async function infiniteScroll(objectId, speed, wait) {
    setTimeout(() => {
        if (document.querySelector(objectId).scrollLeft > ((document.querySelector(objectId).children[0].offsetWidth + 16) * 2)) {
            existant = Array.from(document.querySelector(objectId).querySelectorAll(".client")).slice(1)
            ajout = Array.from(document.querySelector(objectId).querySelectorAll(".client")).slice(0, 1)
            document.querySelector(objectId).replaceChildren(...existant, ...ajout)
            document.querySelector(objectId).scrollTo(document.querySelector(objectId).children[0].offsetWidth, 0)
        }
        if (document.querySelector(objectId).scrollLeft < document.querySelector(objectId).children[0].offsetWidth) {
            existant = Array.from(document.querySelector(objectId).querySelectorAll(".client")).slice(0, -1)
            ajout = Array.from(document.querySelector(objectId).querySelectorAll(".client")).slice(-1)
            document.querySelector(objectId).replaceChildren(...ajout, ...existant)
            document.querySelector(objectId).scrollTo((document.querySelector(objectId).children[0].offsetWidth + 16) * 2, 0)
        }
        document.querySelector(objectId).scrollBy(speed, 0)
        infiniteScroll(objectId, speed, wait)
    }, wait)
}

function openNav() {
    document.querySelector("body").style = "overflow: hidden"
    document.querySelector("#sombre").style = "display: block; opacity: .60;"
    document.querySelector("#sidenav").style = "left: 0"

}
function closeNav() {
    document.querySelector("#sidenav").style = `left: ${-document.querySelector("#sidenav").offsetWidth}`
    document.querySelector("#sombre").style = "display: block"
    setTimeout(() => {
        document.querySelector("#sombre").style = ""
    }, 500)
    document.querySelector("body").style = "overflow: visible"
}

window.onload = (() => {
    // document.querySelector("header").style = "border-radius: 0"
    // document.querySelector("header+aside").style = "border-radius: 0 0 1em 1em" //problème : impossible de remettre quand on retire les asides, donc trouver une solution du style media query mais en js
    scrollLR('#promotions', -100)
    scrollLR('#populaires', -100)
    scrollLR('#nouveautes', -100)
    infiniteScroll("#avis", 1, 50)
})



/* Set the width of the side navigation to 250px */


/* Set the width of the side navigation to 0 */
