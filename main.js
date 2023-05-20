
const form = document.getElementById('informacoes');
let linhas = '';
const contatos = [];
const telefones = [];



form.addEventListener('submit', function (e) {
    e.preventDefault();
    incluirLinhas();
    atualizarTabela();
})
function incluirLinhas() {
    const nomeDoContato = document.getElementById('nome');
    const numeroDeTelefone = document.getElementById('telefone');

    if (contatos.includes(nomeDoContato.value)) {
        alert(`O contato ${nomeDoContato.value} já foi inserido. Não pode haver outro contato com o mesmo nome.`);
    } else {
        contatos.push(nomeDoContato.value);
        telefones.push(parseFloat(numeroDeTelefone.value));


        let linha = `<tr>`;
        linha += `<td >${nomeDoContato.value}</td>`;
        linha += `<td>${numeroDeTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;


        nomeDoContato.value = '';
        numeroDeTelefone.value = '';

    }

}
function atualizarTabela() {
    const tabela = document.getElementById('corpoTabela');
    tabela.innerHTML = linhas;
    console.log(contatos.length);
}
