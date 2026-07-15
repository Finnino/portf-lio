const textos = [
  "Desenvolvedor em Formação",
  "Java",
  "JavaScript",
  "Banco de Dados",
  "Análise de Dados",
  "Suporte em TI"
];

const elemento = document.getElementById("typing");

let textoAtual = 0;
let letraAtual = 0;
let apagando = false;

function escrever() {

    const texto = textos[textoAtual];

    if(!apagando){

        elemento.textContent = texto.substring(0, letraAtual + 1);

        letraAtual++;

        if(letraAtual === texto.length){

            apagando = true;

            setTimeout(escrever,1500);

            return;

        }

    }else{

        elemento.textContent = texto.substring(0, letraAtual - 1);

        letraAtual--;

        if(letraAtual===0){

            apagando=false;

            textoAtual++;

            if(textoAtual>=textos.length){

                textoAtual=0;

            }

        }

    }

    setTimeout(escrever,apagando?50:100);

}

escrever();

document
.getElementById("topo")
.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});
