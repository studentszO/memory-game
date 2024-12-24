export default function randomizeDisplay(data) {
  const dataCopy = [...data];
  dataCopy.forEach((data) => (data.random = Math.random()));
  dataCopy.sort((a, b) => a.random - b.random);
  return dataCopy;
}
