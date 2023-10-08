
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

// function script for the user login authentication 

function login() {
    let userEmail = document.getElementById("exampleInputEmail1").value;
    let userPassword = document.getElementById("exampleInputPassword1").value;

    console.log(userEmail, userPassword);

    if (userEmail === "admin@admin.com" && userPassword === "123456" ) {
        alert("Login successful");
    }
    else {
        alert("Incorrect email or password");
    }
}

//  script for login form authenticatioin

// document.getElementById("loginFormSubmit").addEventListener("click", function () {
//     console.log("button has been clicked.");

//     let userEmail = document.getElementById("exampleInputEmail1").value;
//     let userPassword = document.getElementById("exampleInputPassword1").value;

//     console.log(userEmail, userPassword);

//     if (userEmail === "admin@admin.com" && userPassword === "123456" ) {
//         alert("Login successful");
//     }
//     else {
//         alert("Incorrect email or password");
//     }
    


// })
