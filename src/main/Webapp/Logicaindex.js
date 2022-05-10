var formulario = document.getElementById("formulario");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("le diste click")
    var data = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
    };
    console.log(data);
    console.log(data["username"]);
    console.log(data["password"]);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    var newdata= fetch("./api/Users/found",{method: "POST",
        body: JSON.stringify(data),
        headers: myHeaders
    })
        .then(res =>
            res.json()
        )
        .then(data => {
            console.log("se esta intentando tener el dato")
            console.log(data)
            console.log(data["username"]+" este es el username");
            localStorage.setItem("username",data["username"]);
            localStorage.setItem("role",data["role"]);
            localStorage.setItem("role",data["fcoins"]);
            window.location.href = "http://localhost:8080/Taller4-1.0-SNAPSHOT/Artista.html";
        })

})