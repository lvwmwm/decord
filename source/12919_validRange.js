// Module ID: 12919
// Function ID: 100253
// Name: validRange
// Dependencies: [12912]

// Module 12919 (validRange)

export default function validRange(arg0, arg1) {
  let tmp = require(12912) /* Range */;
  tmp = new tmp(arg0, arg1);
  const range = tmp.range;
  let str = range;
  if (!range) {
    str = "*";
  }
  return str;
};
