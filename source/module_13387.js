// Module ID: 13387
// Function ID: 102382
// Dependencies: [13388]

// Module 13387

export default (arg0) => {
  let num = 0;
  const tmp = require(13388)(arg0);
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
