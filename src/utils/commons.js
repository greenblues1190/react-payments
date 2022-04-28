export const isNumeric = (value) => !Number.isNaN(Number(value));
export const isBackspace = (event) => event.keyCode === 8;
export function* generateIndex(initialIndex) {
  let index = initialIndex;

  while (true) yield (index += 1);
}
