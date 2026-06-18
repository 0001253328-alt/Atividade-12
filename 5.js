let usuario = (prompt ("Digite um usuario"));
let senha = (prompt("Digite a sua senha"));

if (usuario ==="admin" && senha === "12345") {
    console.log ("Acesso liberado! Bem-vindo ao painel");
} else {
    console.log ("Acesso negativo! credenciais inválidas");
}
