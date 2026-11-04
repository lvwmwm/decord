// Module ID: 20142
// Function ID: 20143
// Name: capitalize
// Dependencies: [20143, 625]

// Module 20142 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20143 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
