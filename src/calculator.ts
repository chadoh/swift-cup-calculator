export function costPerCup({ cost, weight }: { cost: number, weight: number }): string {
  const totalCups = weight * 1.4
  return (cost / totalCups).toFixed(2)
}
