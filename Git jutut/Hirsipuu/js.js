const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')
const words = [
    "programming",
    "javascript",
    "database" ,
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizeWord = ''
let maskedWord= ''

const newGame = () => {
    const random = Math-floor(Math.random() * 10) +1
    randomizeWord=words[random]
    maskedWord = "*".repeat(randomizeWord.length)
    console.log(randomizeWord)
    output.innerHTML = maskedWord
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizeWord}.`)
}

const replaceFoundCharts = (guess) => {
    for (let i =0;i<randomizeWord.length;i++) {
        const char = randomizeWord.substring(i,i+i)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString=newString.join('')
            maskedWord=newString
        }
    }
    output.innerHTML =maskedWord
}

newGame()

input.addEventListener('keypress',(e) =>{
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        if (guess.toLowerCase()=== randomizeWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundCharts(guess)
            if (maskedWord.toLocaleLowerCase() === randomizeWord.toLocaleUpperCase()) {
                win()
            }
        } else {
            alert("You guessed wrong!")
        }
        input.value=''
    }
})


input.addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') {
        e.preventDefault(); 
        const guess = input.value;

        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            
        } else if (guess.length === 1) {
            replaceFoundChars(guess);
            
        } else {
           
        }

        input.value = ''; 
    }
})



