// Module ID: 20485
// Function ID: 20486
// Name: capitalize
// Dependencies: [20486, 625]

// Module 20485 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20486 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
