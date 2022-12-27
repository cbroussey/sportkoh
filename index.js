// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

function scrollLR(objectId, amount) {
    document.querySelector(objectId).scrollBy(amount, 0)
}

async function infiniteScroll(objectId, size, speed, wait) {
    setTimeout(() => {
        if (document.querySelector(objectId).scrollLeft > size) {
            existant = Array.from(document.querySelector(objectId).querySelectorAll(".client")).slice(1)
            ajout = Array.from(document.querySelector(objectId).querySelectorAll(".client"))[0]
            document.querySelector(objectId).replaceChildren(...existant, ajout)
            document.querySelector(objectId).scrollTo(0, 0)
        }
        document.querySelector(objectId).scrollBy(speed, 0)
        infiniteScroll(objectId, size, speed, wait)
    }, wait)
}

window.onload = (() => {
    document.querySelector("header").style = "border-radius: 0"
    document.querySelector("header+aside").style = "border-radius: 0 0 1em 1em" //problème : impossible de remettre quand on retire les asides, donc trouver une solution du style media query mais en js
    scrollLR('#promotions', -99999)
    scrollLR('#populaires', -99999)
    scrollLR('#nouveautes', -99999)
    infiniteScroll("#avis", 330, 1, 50)
})

