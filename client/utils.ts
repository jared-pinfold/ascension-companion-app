export function shuffleArray<T> (array: T[]): T[] {
  const newArray = [...array]
  // This is the Fisher-Yates algorithm
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  return newArray
}

export function randomRange (myMin: number, myMax: number) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
} // returns a number between myMin and MyMax (inclusive)