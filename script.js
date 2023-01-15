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