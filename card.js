export default function criarCard(data) {
    const card = document.createElement('div');
    card.innerHTML = `<div class='card>
                        <img src='${data.image}'>
                        <p>Nome: ${data.name}</p>
                        <p>Gênero: ${data.gender}</p>
                        <p>Espécie: ${data.species}</p>
                        <p>Origem: ${data.origin.name}</p>
                        </div>
                        `
    return card;
}