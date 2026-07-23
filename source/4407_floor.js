// Module ID: 4407
// Function ID: 38872
// Name: floor
// Dependencies: [543]

// Module 4407 (floor)

export default function floor(arg0) {
  let tmp = arg0;
  if ("bigint" !== typeof arg0) {
    tmp = require(543)(arg0);
  }
  return tmp;
};
