// Module ID: 13331
// Function ID: 102077
// Dependencies: [13332]

// Module 13331

export default (arg0) => {
  let num = 0;
  const tmp = require(13332)(arg0);
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
