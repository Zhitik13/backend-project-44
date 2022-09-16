export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function randomIndex(data) {
  return Math.floor(Math.random() * data.length);
}
