import { hello } from '../src/cli.js'
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no"')

const wrongAnswer = () => {
    count = -10
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'`)
}



let count = 3
while (count !== 0 && count >= 0) {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    const randomNumber = getRandomInt(100)
    console.log('Question: ', randomNumber)
    const answer = readlineSync.question('Your answer: ')

    const isEven = (answer) => answer % 2 === 0 ? 'yes' : 'no'
    isEven(randomNumber) === answer ? console.log('Correct') : wrongAnswer()
    count -= 1
}
if (count === 0) {
    console.log(`Congratulations, ${userName}`)
}