import { costPerCup } from './calculator'

let cost, weight, result

function calculate() {
  result.innerHTML = costPerCup({ cost: cost.value, weight: weight.value })
}

function main() {
  cost = document.querySelector('[data-behavior="cost"]')
  weight = document.querySelector('[data-behavior="weight"]')
  result = document.querySelector('[data-behavior="result"]')
  if (!weight || !cost || !result) return

  cost.onchange = calculate
  weight.onchange = calculate

  calculate()
}

window.onload = main
