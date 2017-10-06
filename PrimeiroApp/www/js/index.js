

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
			email: emailIn,
			manicure: senha2In
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

/*****************AUTENTICAÇÃO**********************/

function cadastrarUsuario(){
	var usuario = MobileUI.objectByForm('formulario-cadastro');
	const auth = firebase.auth();
	const database = firebase.database();
	const promise = auth.createUserWithEmailAndPassword(usuario.cadastroEmail, usuario.cadastroSenha);
	promise.then(user => {
		if(user){
			const promiseDatabase = database.ref('Users').child("User " + usuario.cadastroNome).set({
			nome: usuario.cadastroNome,
			senha: usuario.cadastroSenha,
			email: usuario.cadastroEmail,
			manicure: false,
			id: user.uid });
			alert("Cadastro Realizado com Sucesso, Faça Login");
		}
	});
}

function cadastrarManicure(){
	var manicure = MobileUI.objectByForm('formulario-cadastro');
	const auth = firebase.auth();
	const database = firebase.database();
	const promise = auth.createUserWithEmailAndPassword(manicure.cadastroEmail, manicure.cadastroSenha);
	promise.then(user => {
		if(user){
			const promiseDatabase = database.ref('Users').child("User " + manicure.cadastroNome).set({
			nome: manicure.cadastroNome,
			senha: manicure.cadastroSenha,
			email: manicure.cadastroEmail,
			manicure: true,
			id: user.uid,
			endereco: manicure.endereco });
			alert("Cadastro Realizado com Sucesso, Faça Login");
		}
	});
}

function verificaLoginUsuario(){

	var usuario = MobileUI.objectByForm('formulario-login');
	var database = firebase.database().ref('Users/' + 'User ' + usuario.email);
	database.on('value', function(snapshot){
		if(snapshot.val().manicure == false){
			const auth = firebase.auth();
			const promise = auth.signInWithEmailAndPassword(snapshot.val().email, snapshot.val().senha);
			promise.then(user => logarUsuario(user)).catch(error => console.log(error.message));
		}
		else{
			alert("Faça Login na Aba de MANICURE");
			openPage(manicure);
		}
	});
}


function verificaLoginManicure(){

	var manicure = MobileUI.objectByForm('formulario-login');
	var database = firebase.database().ref('Users/' + 'User ' + manicure.email);
	database.on('value', function(snapshot){
		if(snapshot.val().manicure == true){
			const auth = firebase.auth();
			const promise = auth.signInWithEmailAndPassword(snapshot.val().email, snapshot.val().senha);
			promise.then(user => logarManicure(user)).catch(error => console.log(error.message));
		}
		else{
			alert("Faça Login na Aba de Usuario");
			openPage(usuario);
		}
	});
	
}

function logarUsuario(user){
	if(user){
		openPage('lista');
	}
	else{
		console.log(user.message);
	}
}

function logarManicure(user){
	if(user){
		openPage('perfil_manicure');
	}
	else{
		console.log(user.message);
	}
}

function logoutUsuario(){
	const auth = firebase.auth();
	auth.signOut();
	openPage('usuario');
}

function logoutManicure(){
	const auth = firebase.auth();
	auth.signOut();
	openPage('manicure');
}
