// Module ID: 12875
// Function ID: 100080
// Name: validRange
// Dependencies: [12868]

// Module 12875 (validRange)

export default function validRange(arg0, arg1) {
  let tmp = require(12868) /* Range */;
  tmp = new tmp(arg0, arg1);
  const range = tmp.range;
  let str = range;
  if (!range) {
    str = "*";
  }
  return str;
};
