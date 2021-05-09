export default function citiesScript(){
    const cidades = document.querySelectorAll('[data-cidades]')
    const cidade = document.querySelector('[data-info="nome"]')
    const populacao = document.querySelector('[data-info="populacao"]')

    cidades.forEach((element, index) => {
        element.addEventListener('click', () => {
            cityInfo(index)
        })
    });

    function cityInfo(index){
        toggleAtivo(index)
        getCityInfo(index)
    }

    function toggleAtivo(index){
        cidades.forEach(element => {
            element.classList.remove('ativo')
        })
        cidades[index].classList.toggle('ativo')
    }

    async function getCityInfo(index){
        /* const rawData = await fetch('https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2020/variaveis/9324?localidades=N6[N3[23]]')
        .then(response => response.json())
        const city = (await rawData[0].resultados[0].series[index].localidade.nome).replace(' - CE', '')
        const population = await rawData[0].resultados[0].series[index].serie[2020]
        cidade.innerHTML = city
        populacao.innerHTML = 'População: ' + population */
        cidade.innerHTML = cidades[index].id
    }
}

