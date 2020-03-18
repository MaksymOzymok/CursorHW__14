
import maxPrice from "./hw1";
import isEven from "./hw2";
import getMaxNumber from "./hw3";
import makePairs from "./hw4";
import getCharactersApi from "./getCharactersApi";
import renderCharacters from "./renderCharacters";

import "./style.css"



console.log('maxPrice from hw#1  ' + maxPrice );

console.log('Checking if number = 5 is even from hw#2  ' + isEven(5));

console.log('get max number from 123  ' + getMaxNumber(123));

console.log('make pairs from array ["Саша","Игорь","Лена","Ира"]   ',makePairs(["Саша","Игорь","Лена","Ира"]));

getCharactersApi(2)
    .then(renderCharacters);



