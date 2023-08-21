export function compareSides(a: number, b: number, c: number): string {
  if (a === b && a === c) return "EQUILATERAL"
  if (a !== b && b !== c && c !== a) return "SCALENE"
  return "ISOCELES"
}