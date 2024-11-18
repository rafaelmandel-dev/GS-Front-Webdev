<section class="gente">
    <div class="container-gente">
        <h1>Porque escolher a Guardian?</h1>
        <p>Soluções sustentáveis para energia renovável e eficiência energética que você só encontra aqui</p>
        <div id="impact-list" class="carousel-container">
            <!-- Itens serão adicionados aqui -->
        </div>
        <div class="carousel-buttons">
            <button id="prev-btn">&lt;</button>
            <button id="next-btn">&gt;</button>
        </div>
    </div>
</section>

----

/* Secção Gente */
.container-gente {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gente h1 {
    text-align: center;
    color: #2c3e50;
}

.gente p {
    text-align: center;
    font-size: 1.2em;
    color: #555;
}

.carousel-container {
    display: flex;
    overflow: hidden;
    margin-top: 20px;
}

.impact {
    min-width: 100%;
    box-sizing: border-box;
    transition: transform 0.5s ease;
}

.impact h3 {
    margin: 0;
    font-size: 1.5em;
    color: #2c3e50;
}

.impact p {
    margin: 5px 0 0;
    font-size: 1em;
    color: #555;
}

.carousel-buttons {
    text-align: center;
    margin-top: 10px;
}

.carousel-buttons button {
    background-color: #2c3e50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    margin: 0 10px;
    border-radius: 5px;
}

.carousel-buttons button:hover {
    background-color: #34495e;
}


---

const impactos = [
    {
        titulo: "Sustentabilidade Ambiental",
        descricao: "Ao recomendar fontes de energias renováveis, o sistema pode reduzir a dependência de fontes tradicionais, como combustíveis fósseis e grandes hidrelétricas, diminuindo emissões de carbono e preservando ecossistemas locais. Isso contribui diretamente para a mitigação das mudanças climáticas e para a preservação da biodiversidade."
    },
    {
        titulo: "Eficiência Energética Regional",
        descricao: "O software permite uma produção de energia otimizada para as características naturais de cada localidade. Isso pode resultar em um aproveitamento mais eficiente dos recursos naturais, reduzindo desperdícios e aumentando a autonomia das regiões em relação ao abastecimento energético."
    },
    {
        titulo: "Descentralização da Produção Energética",
        descricao: "Ao adaptar a geração de energia às condições locais, o projeto incentiva a produção energética regional e diversificada, diminuindo a necessidade de grandes centrais e redes de transmissão complexas, o que pode melhorar a resiliência energética e reduzir perdas na transmissão."
    },
    {
        titulo: "Acessibilidade e Inclusão Energética",
        descricao: "Com o incentivo à produção regional sustentável, o projeto pode aumentar o acesso à energia em áreas remotas ou menos atendidas, promovendo inclusão energética e apoiando o desenvolvimento local."
    }
];

const impactList = document.getElementById('impact-list');
let currentIndex = 0;

const renderImpactos = () => {
    impactList.innerHTML = ''; // Limpa a lista antes de adicionar os itens novamente
    
    const impactDiv = document.createElement("div");
    impactDiv.classList.add("impact");
    
    const title = document.createElement("h3");
    title.textContent = impactos[currentIndex].titulo;
    
    const description = document.createElement("p");
    description.textContent = impactos[currentIndex].descricao;
    
    impactDiv.appendChild(title);
    impactDiv.appendChild(description);
    impactList.appendChild(impactDiv);
};

// Navegação para o próximo impacto
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % impactos.length; // Vai para o próximo item ou volta ao primeiro
    renderImpactos();
});

// Navegação para o impacto anterior
const prevBtn = document.getElementById('prev-btn');
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + impactos.length) % impactos.length; // Vai para o anterior ou volta ao último
    renderImpactos();
});

// Inicializa o carrossel com o primeiro impacto
renderImpactos();
