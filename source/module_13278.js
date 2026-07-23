// Module ID: 13278
// Function ID: 101750
// Dependencies: [13279]

// Module 13278

export default (arg0) => {
  let num = 0;
  const tmp = require(13279)(arg0);
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
