function getMin() {
  let numbRange = Array.from(arguments);
  numbRange.sort((a, b) => a - b);
  return numbRange[0];
}

getMin();