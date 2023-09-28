
                              // script for the dynamic hedder
document.getElementById("cart-btn").addEventListener("pointerover", function () {
    this.classList.add("fa-bounce");
    let x = this.getAttribute("class");
    console.log(x);
})


document.getElementById("cart-btn").addEventListener("pointerout", function () {
    this.classList.remove("fa-bounce");
    let x = this.getAttribute("class");
    console.log(x);
})


