const axios = require('axios');

export  default async function getCharacter(value){
    return await axios.get(value);
}