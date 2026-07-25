// Module ID: 12874
// Function ID: 100075
// Name: validRange
// Dependencies: [12867]

// Module 12874 (validRange)

export default function validRange(arg0, arg1) {
  let tmp = require(12867) /* Range */;
  tmp = new tmp(arg0, arg1);
  const range = tmp.range;
  let str = range;
  if (!range) {
    str = "*";
  }
  return str;
};
