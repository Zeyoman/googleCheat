// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/**
 * Permet de faire le système de résultats
 */
    const randomNumberPost = Math.floor(Math.random() * 1000000000) + 10000;
    var randomNumberSeconds = Math.random()
    randomNumberSeconds = randomNumberSeconds.toFixed(2);
    document.getElementById('number-of-post').innerHTML ="Environ "+ randomNumberPost +" résultats ("+randomNumberSeconds+" secondes)"

/**
 * Permet d'avoir des mots random
 */
    fetch("https://trouve-mot.fr/api/categorie/22/5")
        .then((response) => response.json())
        .then((words) => {
            console.log(words.length);
            for(let i = 0; i < words.length; i++){
                const word = words[i].name
                const divWord = document.createElement('div')
                divWord.classList.add('word')
                divWord.innerHTML = word
                document.getElementById('conseil-mots').appendChild(divWord)
            }
        });