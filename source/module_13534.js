// Module ID: 13534
// Function ID: 13535
// Dependencies: [13535]

// Module 13534

export default (arg0) => {
  const tmp = require(13535)(arg0);
  let num = 0;
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
