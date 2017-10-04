

/*****************USUÁRIO**********************/
function exibirCadastro(){
	MobileUI.hide('formulario-login');
	MobileUI.show('formulario-cadastro');
}

function exibirLogin(){
	MobileUI.show('formulario-login');
	MobileUI.hide('formulario-cadastro');
}

function logar(){
	var usuario = MobileUI.objectByForm('formulario-login');
	if (usuario.email == "" || usuario.senha == ""){
		alert("Digite o seu e-mail e senha");
	}
	else{
		openPage('lista');
	}
}

/*TESTES, BY JONAS*/
var nome = document.getElementById("cadastroNome");
var email = document.getElementById("cadastroEmail");
var senha = document.getElementById("cadastroSenha");
var senha2 = document.getElementById("cadastroSenha2");

function cadastrar(){ //do usuario

	var firebaseRef = firebase.database().ref();

	var nomeIn = cadastroNome.value;
	var emailIn = cadastroEmail.value;
	var senhaIn = cadastroSenha.value;
	var senha2In = cadastroSenha2.value;

	if (emailIn == "" || senhaIn == "" || nomeIn == "" || senha2In == ""){
		alert("Preencha todos os campos corretamente");
	}
	else if (senhaIn != senha2In){
		alert("As senhas não correspondem");
	}
	else {
		firebase.database().ref('Users').child("User " + nomeIn).set({
			nome: nomeIn,
			senha: senhaIn,
			email: emailIn
		});
		alert("Cadastro realizado, faça seu login");
		cadastroNome.value = ""; //zerar os valores nos campos
		cadastroEmail.value = "";
		cadastroSenha.value = "";
		cadastroSenha2.value = "";
	}

}
/*END TESTES, BY JONAS*/

/*****************MANICURE**********************/
function exibirCadastroManicure(){
	MobileUI.hide('formulario-login');
	MobileUI.show('formulario-cadastro');
}

function exibirLoginManicure(){
	MobileUI.show('formulario-login');
	MobileUI.hide('formulario-cadastro');
}

function logarManicure(){
	var manicure = MobileUI.objectByForm('formulario-login');
	if (manicure.email == "" || manicure.senha == ""){
		alert("Digite o seu e-mail e senha!");
	}
	else{
		openPage('perfil_manicure');
	}
}
/**/
function cadastrarManicure(){
	alert("teste")
}
