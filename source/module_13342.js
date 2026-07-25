// Module ID: 13342
// Function ID: 102204
// Dependencies: [13343]

// Module 13342

export default (arg0) => {
  let num = 0;
  const tmp = require(13343)(arg0);
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
