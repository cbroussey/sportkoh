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
}

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

window.onload = (() => {
    scrollLR('#promotions', -100)
    scrollLR('#populaires', -100)
    scrollLR('#nouveautes', -100)
    infiniteScroll("#avis", 1, 50)
})