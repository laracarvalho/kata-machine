export function two_crystal_balls_sqrt(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length))

  let i = jump
  for (i; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break
    }
  }

  i -= jump

  for (let j = 0; j < jump && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i
    }
  }

  return -1
}

export function two_crystal_balls_linear(breaks: boolean[]): number {
  const jump = Math.floor(breaks.length / 2)

  let i = jump
  for (i; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break
    }
  }

  i -= jump

  for (let j = 0; j < jump && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i
    }
  }

  return -1
}