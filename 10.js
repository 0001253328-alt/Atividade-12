let salario = Number (prompt("Qual seu salario bruto?: "))
let parcelas = Number (prompt("Define seu valor das parcelas desejadas: "))
let porcentagem = salario * 0.30
if (parcelas<porcentagem){
    console.log("Aprovado")
}
else{
    
    console.log("Negado")
}