import { costPerCup } from './calculator'

test.each`
  cost  | weight | result
  ${14} | ${10}  | ${'1.00'}
  ${28} | ${10}  | ${'2.00'}
  ${17} | ${10}  | ${'1.21'}
`('cost=$cost & weight=$weight = $$result per cup', ({ cost, weight, result }) => {
  expect(costPerCup({ cost, weight })).toBe(result)
})
