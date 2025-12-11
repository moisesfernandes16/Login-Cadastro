// Login
const divLogin = document.getElementById('Login');
const h1 = document.getElementById('meuH1');
const labelEmail = document.getElementById('Email');
const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const labelSenha = document.getElementById('txtSenha');
const container = document.getElementById('Container');
const acesso = document.getElementById('btnAcesso');
const btnjConta = document.getElementById('jTemConta');

// cadastro
const divCadastro = document.getElementById('Cadastro');
const h1Cadastro = document.getElementById('H1Cadastro');
const nomeCad = document.getElementById('NomeCdst');
const inputNomeCad = document.getElementById('nomeCmplt');
const labelEmailCad = document.getElementById('emailCdst');
const inputEmailCad = document.getElementById('loginCadastro');
const labelSenhaCad = document.getElementById('SenhaCdst');
const inputSenhaCad = document.getElementById('senhaCadastro');
const btnCadastroCplt = document.getElementById('btnCadastroCplt');

const btnCadastro = document.getElementById('nTemConta');

const formCadastro = document.querySelector('#Cadastro form')
divCadastro.style.display = 'none';

const formLogin = document.querySelector('#Login form')

const eyeLocked = document.getElementById("olhoFechado")
const eyeOpen = document.getElementById("olhoAberto")

btnCadastro.addEventListener('click', (event) => {
    event.preventDefault();

    h1.style.display = "none"
    labelEmail.style.display = "none"
    inputLogin.style.display = "none"
    inputSenha.style.display = "none"
    labelSenha.style.display = "none"
    btnCadastro.style.display = "none"
    acesso.style.display = "none"

    divCadastro.style.display = "flex";


});

btnjConta.addEventListener('click', (event) => {
    event.preventDefault();
    divCadastro.style.display = 'none';

    divLogin.style.display = 'flex';
    h1.style.display = "block";
    labelEmail.style.display = "block";
    inputLogin.style.display = "block";
    labelSenha.style.display = "block";
    inputSenha.style.display = "block";
    btnCadastro.style.display = "block";
    acesso.style.display = "block";

});

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = inputNomeCad.value.trim();
    const email = inputEmailCad.value.trim();
    const senha = inputSenhaCad.value;

    const usuario = { nome, email, senha };

    localStorage.setItem('usuarioCadastro', JSON.stringify(usuario));
    alert(`Parabens ${nome} você está conectado`);

    console.log('VOU SALVAR:', usuario);
    formCadastro.reset();
});

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = inputLogin.value.trim();
    const senha = inputSenha.value;

    const dadosSalvos = JSON.parse(localStorage.getItem("usuarioCadastro"));

    if (!dadosSalvos) {
        alert('Nenhum usuário cadastrado. Faça o cadastro primeiro.');
        return;
    }
    if (!email || !senha) {
        alert('Adicione seu Email e senha!');
        return;
    }

    if (email === dadosSalvos.email && senha === dadosSalvos.senha) {
        alert("Parabéns você se Conectou")
        formLogin.reset();
    }
    else {
        alert('Email ou Senha incorretos.');
    }

});

// código da senha para verificar 

inputSenha.type = "password"
eyeLocked.style.display = 'block';
eyeOpen.style.display = 'none';

eyeLocked.addEventListener("click", (event) => {

    inputSenhaCad.type = "text"
    inputSenha.type = "text"
    eyeLocked.style.display = 'none';
    eyeOpen.style.display = 'block';
})
eyeOpen.addEventListener("click", (event) => {

    inputSenhaCad.type = "password"
    inputSenha.type = "password"
    eyeLocked.style.display = 'block';
    eyeOpen.style.display = 'none';
})

const toggleTema = document.getElementById("modoClaro")
toggleTema.addEventListener("click", () =>{
    document.body.classList.toggle('dark')
})