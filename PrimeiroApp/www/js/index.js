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


function cadastrar(){
	alert("teste")
}