// Module ID: 13620
// Function ID: 13621
// Dependencies: [13621]

// Module 13620

export default (arg0) => {
  const tmp = require(13621)(arg0);
  let num = 0;
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
