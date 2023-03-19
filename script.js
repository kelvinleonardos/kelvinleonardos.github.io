function myFunction() {
    var x = document.getElementsByClassName("nav-links-container");
    Array.from(x).forEach((elm) => {
        if (elm.style.display === "none") {
          elm.style.display = "flex";
        } else {
          elm.style.display = "none";
        }
    })
}
