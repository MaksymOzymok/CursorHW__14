import getCharacter from "./getCharacter";
import backgroundImg from "./img/background.jpg"

export default async function renderCharacters(apis) {
    //let result = [];
    const container = document.createElement('div');
    container.className = 'container';
    container.style.backgroundImage = `url(${backgroundImg})`;
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundSize = 'cover';
    document.body.appendChild(container);
    apis.forEach(api => {
        getCharacter(api).then(value => {
            const divUser = document.createElement('div');
            divUser.className = 'character';
            divUser.innerHTML = `
     <p>name: ${value.data.name} <br>
        birth: ${value.data.birth_year}<br>
        male: ${value.data.gender}
        </p>`;
            container.append(divUser);
        });
    });
}