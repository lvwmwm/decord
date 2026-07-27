// Module ID: 13343
// Function ID: 102209
// Dependencies: [13344]

// Module 13343

export default (arg0) => {
  let num = 0;
  const tmp = require(13344)(arg0);
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
