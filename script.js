function calcularIdade() {
    let anoNascimento = Number (prompt('Qual o ano que você nasceu ?'));
    const d = new Date();
    let year = d.getFullYear();
    let idade = year - anoNascimento;
    let result = document.getElementById('resultado').innerHTML = `Quem nasceu em ${anoNascimento} tem ${idade}!`
}