
//class contato

class contato {
  constructor(nome, email, telefone, contato, texto_contato) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.contato = contato;
    this.texto_contato = texto_contato;
  }     
}

//function pra jogar a geladeira toda no console


function Post(form) {

    event.preventDefault();

    let data = new contato(form.elements.namedItem("nome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,             form.elements.namedItem("texto_contato").value);
  
        ConsoleLog(data);
}

function ConsoleLog(data){

    console.log("Nome: ",data.nome);
    console.log("Email: ",data.email);
    console.log("Telefone: ",data.telefone);
    console.log("Contato: ",data.contato);
    console.log("Mensagem: ",data.texto_contato);
    

}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

const checkboxTermos = document.getElementById("termos");
const botao = document.getElementById("btnEnviar");

checkboxTermos.addEventListener("change", () => {
    botao.disabled = !checkboxTermos.checked;
});