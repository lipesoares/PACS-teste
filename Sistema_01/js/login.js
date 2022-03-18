function login() {
    var user=document.getElementById("user");
    var pass=document.getElementById("password");
    var login=document.getElementById("login-form");

    if (user.value == '') {
        alert("Usuário não pode estar em branco!");
        user.focus();
        return;
    }
    if (pass.value == '') {
        alert("Senha não pode estar em branco!");
        pass.focus();
        return;
    }
    if  (user.value == "teste" && pass.value == "teste") {
        /* alert("Login OK!"); */
        /* login.submit(); */
        window.location.href = "index.html";
    } else {
        alert("Falha no Login");
        login.submit();
    }
}