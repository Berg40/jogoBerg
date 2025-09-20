


const berg = window.document.querySelector(".berg");  /* NA QUERY SELETOR EU PASSO A CLASSE DO PERSONAGEM*/
const tubo = window.document.querySelector(".tubo");
const berg1 = window.document.getElementById("game-over");


const pular = () => {
    berg.classList.add("pular");

    setTimeout(() => {   /*CRIO ESSA FUNCAO ANONIMA () => QUE VAI REMOVER A FUNCAO PULAR PARA ELE PODER INICIAR NOVAMENTE */ 
       berg.classList.remove("pular"); 
    }, 500);  /*tempo da animacao que pula */
}

/*LOOP QUE VAI FICAR VERIFICANDO TODO TEMPO SE A GENTE PERDEU (O PERSONAGEM ENCONSTOU NO TUDO) OU NAO*/
const loop = setInterval(() => {
    const tuboPosicao = tubo.offsetLeft; 
    const bergPosicao = +window.getComputedStyle(berg).bottom.replace("px", "")
    

    if (tuboPosicao <= 47 && tuboPosicao > 0 && bergPosicao < 60 ) {  /*Quando ele chegar nessa posicao ele para o jogo */
        tubo.style.animation = "none";
        tubo.style.left = `${tuboPosicao}px`;

        berg.style.animation = "none";
        berg.style.left = `${bergPosicao}px`;

        berg.src = "./img/berg-morto.png" /*MUDAR A IMAGEM DO PERSONAGEM QUANDO ELE MORRE*/
        berg1.innerHTML = "<h1>GAME OVER</h1>"
        
        berg.style.width = "60px"
        berg.style.marginLeft = "5px"

        clearInterval(loop); /*PARA O LOOP DE VERIFICACAO*/
    }

       
    }, 10);



window.document.addEventListener("keydown", pular)   /*ADICIONADOR DE EVENTO (NO CASO QUANDO APERTAR UMA TECLA ELE REALIZE ESSE EVENTO NO PROJETO 'É PULAR)*/



     

















