/* ==================================================
   TEXTO DIGITANDO
================================================== */

const textos = [
    "Desenvolvedor em Formação",
    "Java",
    "JavaScript",
    "Banco de Dados",
    "Análise de Dados",
    "Suporte em TI"
];

const typingElement = document.getElementById("typing");

let textoAtual = 0;
let letraAtual = 0;
let apagando = false;

function escrever() {

    if (!typingElement) return;

    const texto = textos[textoAtual];

    if (!apagando) {

        typingElement.textContent = texto.substring(0, letraAtual + 1);

        letraAtual++;

        if (letraAtual === texto.length) {

            apagando = true;

            setTimeout(escrever, 1500);

            return;
        }

    } else {

        typingElement.textContent = texto.substring(0, letraAtual - 1);

        letraAtual--;

        if (letraAtual === 0) {

            apagando = false;

            textoAtual++;

            if (textoAtual >= textos.length) {

                textoAtual = 0;

            }

        }

    }

    setTimeout(escrever, apagando ? 50 : 100);

}

escrever();

/* ==================================================
   BOTÃO VOLTAR AO TOPO
================================================== */

const botaoTopo = document.getElementById("topo");

if (botaoTopo) {

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==================================================
   ANIMAÇÃO AO ROLAR A PÁGINA
================================================== */

const elementos = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

elementos.forEach(elemento => {

    observer.observe(elemento);

});
