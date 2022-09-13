export function counter(): number {
  //@ts-ignore
  return counter.value ? ++counter.value : (counter.value = 1)
}
