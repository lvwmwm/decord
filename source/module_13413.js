// Module ID: 13413
// Function ID: 13414
// Dependencies: [13411]

// Module 13413

export default (arg0, arg1) => {
  const tmp = require(13411)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
