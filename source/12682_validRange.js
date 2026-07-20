// Module ID: 12682
// Function ID: 97393
// Name: validRange
// Dependencies: []

// Module 12682 (validRange)

export default function validRange(arg0, arg1) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg1);
  const range = tmp.range;
  let str = range;
  if (!range) {
    str = "*";
  }
  return str;
};
