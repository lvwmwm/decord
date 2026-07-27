// Module ID: 4408
// Function ID: 38885
// Name: floor
// Dependencies: [543]

// Module 4408 (floor)

export default function floor(arg0) {
  let tmp = arg0;
  if ("bigint" !== typeof arg0) {
    tmp = require(543)(arg0);
  }
  return tmp;
};
