/**
 * 
 * 
 * 
 */

const clickerOne = document.getElementById('clickerOne');
const clickerTwo = document.getElementById('clickerTwo');
const clickerThree = document.getElementById('clickerThree');
const clickerFour = document.getElementById('clickerFour');




const jokeOneDiv = document.getElementById('jokeOneDiv');
const jokeTwoDiv = document.getElementById('jokeTwoDiv');
const jokeThreeDiv = document.getElementById('jokeThreeDiv');
const jokeFourDiv = document.getElementById('jokeFourDiv');

const jokeOne = document.getElementById('jokeOne');
const jokeTwo = document.getElementById('jokeTwo');
const jokeThree = document.getElementById('jokeThree');
const jokeFour = document.getElementById('jokeFour');

const answerOne = document.getElementById('answerOne');
const answerTwo = document.getElementById('answerTwo');
const answerThree = document.getElementById('answerThree');
const answerFour = document.getElementById('answerFour');





function displayJokeOne() {
    jokeOne.innerText = 'What is Forrest Gump\'s email password?';
    answerOne.innerText = '1Forrest1';
}
clickerOne.onclick = displayJokeOne;

function displayJokeTwo() {
    jokeTwo.innerText = 'Did you hear about the guy who invented the knock-knock joke?';
    answerTwo.innerText = 'He won the "no-bell" prize!!';
}
clickerTwo.onclick = displayJokeTwo;

function displayJokeThree() {
    jokeThree.innerText = 'What wouldn\'t you find in a haunted house?';
    answerThree.innerText = 'A living room!';
}
clickerThree.onclick = displayJokeThree;

function displayJokeFour() {
    jokeFour.innerText = 'What did one hat say to the other?';
    answerFour.innerText = 'You wait here! I will go on a head!';
}
clickerFour.onclick = displayJokeFour;






