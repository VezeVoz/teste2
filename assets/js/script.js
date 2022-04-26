

function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('#descricao1home');
typeWriter(titulo);

var itemproject1 = document.getElementById('proitem1');
var itemproject2 = document.getElementById('proitem2');
var itemproject3 = document.getElementById('proitem3');
var itemproject4 = document.getElementById('proitem4');
var texto = document.getElementById('result');
itemproject1.addEventListener('click', showtext1);
itemproject2.addEventListener('click', showtext2);
itemproject3.addEventListener('click', showtext3);
itemproject4.addEventListener('click', showtext4);

function showtext1(){
    texto.innerHTML = 'Somos empreendedores sociais,  jovens da periferia e profissionais de diversos segmentos inconformados e incomodados com a falta de oportunidades e perspectivas para os jovens em situação de vulnerabilidade. Aqui, eles não são invisíveis! Nos importamos com a conexão que eles precisam ter no momento presente para trilharem um futuro mais promissor, beneficiando a sociedade como um todo, gerando profissionais mais preparados, engajados e conectados com as necessidades atuais.'
}

function showtext2(){
    texto.innerHTML = 'Nossos principais valores são a Empatia, trabalho em equipe, compromisso com a educação respeito, foco e dedicação além de amor e responsabilidade social'
}

function showtext3(){
    texto.innerHTML = 'como missão transformar o jovem em situação de vulnerabilidade num agente social protagonista da sua história'
}

function showtext4(){
    texto.innerHTML = 'Preparar jovens para fortalecer sua saúde emocional e mental frente aos desafios de encontrar oportunidades de desenvolvimento pessoal e profissional'
}

var sumirtextconquista = document.getElementById('texto2');
var sumirdescrconquista = document.getElementById('descricao2');
var itemconquist1 = document.getElementById('conquista1');
var itemconquist2 = document.getElementById('conquista2');
var itemconquist3 = document.getElementById('conquista3');
var itemconquist4 = document.getElementById('conquista4');
var showresult = document.getElementById('resultado'); 
itemconquist1.addEventListener('click', showconquist1);
itemconquist2.addEventListener('click', showconquist2);
itemconquist3.addEventListener('click', showconquist3);
itemconquist4.addEventListener('click', showconquist4);

function showconquist1(){
    sumirtextconquista.innerHTML = '';
    sumirdescrconquista.innerHTML = '';
    showresult.innerHTML = 'O Vez e Voz já conseguiu impactar 705 jovens diretamente e mais de 4 mil indiretamente trazendo a eles cada vez mais poder de fala com todas as habilidades que o projeto aborda!';
}

function showconquist2(){
    sumirtextconquista.innerHTML = '';
    sumirdescrconquista.innerHTML = '';
    showresult.innerHTML = 'Conseguimos mobilizar 90 comunidades com o projeto em sua íntegra de conteúdo e possibilidade de sustentação de parendizado de modo geral!';
}

function showconquist3(){
    sumirtextconquista.innerHTML = '';
    sumirdescrconquista.innerHTML = '';
    showresult.innerHTML = 'Temos 10 relevantes parcerias para a realização dos programas que o projeto propõe para os participantes que estão conosco!';
}

function showconquist4(){
    sumirtextconquista.innerHTML = '';
    sumirdescrconquista.innerHTML = '';
    showresult.innerHTML = 'Conseguimos um espaço de vez e voz em parceria com o Inova Habitat, conseguindo assim mais espaço de fala para cada um de nós!';
}


var balls = document.querySelector('.balls');
var quant = document.querySelectorAll('.slides .image');
var atual = 0;
var imagem = document.getElementById('atual');
var next = document.getElementById('next');
var voltar = document.getElementById('voltar');
var rolar = true;

for(let i=0; i < quant.length; i++){
    var div = document.createElement('div');
    div.id = i;
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgatual');

var pos = document.querySelectorAll('.balls div')

for(let i=0; i < pos.length; i++){
    pos[i].addEventListener('click', () =>{
        atual = pos[i].id;
        rolar = false
        slide();
    })
}

voltar.addEventListener('click', ()=>{
    atual--; 
    rolar = false;
    slide();
})

next.addEventListener('click', ()=>{
    atual++; 
    rolar = false;
    slide();
})

function slide(){
    if(atual >= quant.length){
        atual = 0;
    }else if(atual <0){
        atual = quant.length-1;
    }
    document.querySelector('.imgatual').classList.remove('imgatual');
    imagem.style.marginLeft = -300*atual+'px'; 
    document.getElementById(atual).classList.add('imgatual');
}

function slideresponsivo (){
    var largura = window.screen.width;
    if(largura = 500+'px') {
        imagem.style.marginLeft = -222*atual+'px';
    }
}

setInterval(() =>{
    if (rolar){
        atual++;
        slide()
    }else {
        rolar= true;
    }
    
},40000)

var enviar = document.getElementById('submit');
var limpar = document.getElementById('clear');
var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var inputTextarea = document.getElementById('itextareaa');

enviar.addEventListener('click', validardados);

function validardados(){
    if (inputName.value == "" || inputEmail.value == ""){
        alert("[ERROR] Algum dos dados colocados estão vazios: Preencha-os com as informações que foram pedidas!");
        enviar.preventDefault();
    }
}
