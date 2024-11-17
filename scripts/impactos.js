const impactos = [
    {
        titulo: "Sustentabilidade Ambiental",
        descricao: "Ao recomendar fontes de energias renováveis, o software pode reduzir a dependência de fontes tradicionais, como combustíveis fósseis e grandes hidrelétricas, diminuindo emissões de carbono e preservando ecossistemas locais. Isso contribui diretamente para a mitigação das mudanças climáticas e para a preservação da biodiversidade."
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

impactos.forEach(impact => {
    const impactDiv = document.createElement("div");
    impactDiv.classList.add("impact");

    const title = document.createElement("h3");
    title.textContent = impact.titulo;

    const description = document.createElement("p");
    description.textContent = impact.descricao;

    impactDiv.appendChild(title);
    impactDiv.appendChild(description);
    impactList.appendChild(impactDiv);
});