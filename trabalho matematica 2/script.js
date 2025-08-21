const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dessas palavras descreve melhor sua personalidade?",
        alternativas: [
            {
                texto: "Coragem",
                afirmacao: "Você é corajoso e adora se arriscar, como Teemo."
            },
            {
                texto: "Diversão",
                afirmacao: "Você é animado e gosta de diversão, assim como Tristana."
            },
            {
                texto: "Inteligência",
                afirmacao: "Você é muito sábio e racional, como Heimerdinger."
            },
            {
                texto: "Determinação",
                afirmacao: "Você é muito determinado e nunca desiste, como Rumble."
            },
            {
                texto: "Ambição",
                afirmacao: "Você é extremamente ambicioso e busca poder, como Veigar."
            }
        ]
    },
    {
        enunciado: "Qual é o seu estilo de combate preferido?",
        alternativas: [
            {
                texto: "Ataque surpresa",
                afirmacao: "Você prefere atacar quando menos espera, assim como Teemo."
            },
            {
                texto: "Explosões e diversão",
                afirmacao: "Você adora uma boa explosão e se diverte com isso, como Tristana."
            },
            {
                texto: "Controle e invenções",
                afirmacao: "Você gosta de inventar e controlar as situações com sabedoria, como Heimerdinger."
            },
            {
                texto: "Máquina de guerra",
                afirmacao: "Você adora pilhar e destruir tudo pelo caminho, como Rumble."
            },
            {
                texto: "Magia e poder",
                afirmacao: "Você gosta de dominar o poder mágico, como Veigar."
            }
        ]
    },
    {
        enunciado: "Como você lida com os desafios?",
        alternativas: [
            {
                texto: "Com coragem e astúcia",
                afirmacao: "Você enfrenta os desafios com bravura e estratégia, como Teemo."
            },
            {
                texto: "Com otimismo e alegria",
                afirmacao: "Você enfrenta tudo com um sorriso e positivismo, como Tristana."
            },
            {
                texto: "Com lógica e raciocínio",
                afirmacao: "Você pensa antes de agir, usando sabedoria e estratégia, como Heimerdinger."
            },
            {
                texto: "Com força e perseverança",
                afirmacao: "Você encara tudo com força e nunca desiste, como Rumble."
            },
            {
                texto: "Com astúcia e manipulação",
                afirmacao: "Você enfrenta os desafios manipulando o poder mágico, como Veigar."
            }
        ]
    },
    {
        enunciado: "Qual desses hobbies você mais se identifica?",
        alternativas: [
            {
                texto: "Explorar e plantar armadilhas",
                afirmacao: "Você gosta de explorar e preparar armadilhas, como Teemo."
            },
            {
                texto: "Construir e testar coisas novas",
                afirmacao: "Você adora criar novas invenções, como Heimerdinger."
            },
            {
                texto: "Brincar e se divertir com amigos",
                afirmacao: "Você adora se divertir e estar com seus amigos, como Tristana."
            },
            {
                texto: "Conquistar e destruir tudo pelo caminho",
                afirmacao: "Você gosta de destruir tudo o que vê pela frente, como Rumble."
            },
            {
                texto: "Estudar e controlar o poder mágico",
                afirmacao: "Você se dedica ao estudo e busca o controle do poder, como Veigar."
            }
        ]
    },
    {
        enunciado: "Se você estivesse em um time, qual seria seu papel?",
        alternativas: [
            {
                texto: "Espião e causador de danos",
                afirmacao: "Você é rápido e furtivo, atacando de surpresa como Teemo."
            },
            {
                texto: "Atiradora e exploradora",
                afirmacao: "Você é ágil e se diverte explorando o campo de batalha, como Tristana."
            },
            {
                texto: "Inventor e estrategista",
                afirmacao: "Você é a mente criativa do time, planejando e criando novas estratégias, como Heimerdinger."
            },
            {
                texto: "Tank e destruidor",
                afirmacao: "Você se coloca na linha de frente, destruindo tudo em seu caminho, como Rumble."
            },
            {
                texto: "Mago controlador",
                afirmacao: "Você controla as forças mágicas para dominar a batalha, como Veigar."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpar as alternativas anteriores
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é um Yordle!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
