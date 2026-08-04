// Module ID: 4560
// Function ID: 4561
// Name: floor
// Dependencies: [566]

// Module 4560 (floor)

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = require(566)(arg0);
  }
  return tmp;
};
