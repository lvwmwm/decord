// Module ID: 12812
// Function ID: 99627
// Name: validRange
// Dependencies: [12805]

// Module 12812 (validRange)

export default function validRange(arg0, arg1) {
  let tmp = require(12805) /* Range */;
  tmp = new tmp(arg0, arg1);
  const range = tmp.range;
  let str = range;
  if (!range) {
    str = "*";
  }
  return str;
};
