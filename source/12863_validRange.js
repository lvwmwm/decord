// Module ID: 12863
// Function ID: 99948
// Name: validRange
// Dependencies: [12856]

// Module 12863 (validRange)

export default function validRange(arg0, arg1) {
  let tmp = require(12856) /* Range */;
  tmp = new tmp(arg0, arg1);
  const range = tmp.range;
  let str = range;
  if (!range) {
    str = "*";
  }
  return str;
};
