const axios = require('axios');
const BASE  = 'https://swapi.co/api/';

export  default async function getFilmCharactersApi(film=2) {

    //k.start();
    const info = await axios.get(BASE + `films/${film}/`);
    return info.data.characters;
}

