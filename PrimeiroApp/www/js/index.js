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

function cadastrar(){
	alert("teste")
}

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

function cadastrarManicure(){
	alert("teste")
}