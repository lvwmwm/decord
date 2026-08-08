// Module ID: 13621
// Function ID: 13622
// Dependencies: [13619]

// Module 13621

export default (arg0, arg1) => {
  const tmp = require(13619)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
