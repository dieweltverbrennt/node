#!/usr/bin/env node

const readline = require('readline')

const MIN = 0
const MAX = 100
const secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
})

console.log(`Загадано число в диапазоне от ${MIN} до ${MAX}`)

const check = (input) => {
  const number = parseInt(input, 10)

  if (isNaN(number)) {
    console.log('Пожалуйста, введите число')
    return false
  }

  if (number < MIN || number > MAX) {
    console.log(`Число должно быть в диапазоне от ${MIN} до ${MAX}`)
    return false
  }

  if (number === secretNumber) {
    console.log(`Отгадано число ${secretNumber}`)
    return true
  } else if (number < secretNumber) {
    console.log('Больше')
    return false
  } else {
    console.log('Меньше')
    return false
  }
}

const ask = () => {
  rl.question('', (input) => {
    const trimmedInput = input.trim()
    const answer = check(trimmedInput)
    if (answer) return rl.close()
    ask()
  })
}

ask()
