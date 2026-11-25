// Module ID: 20065
// Function ID: 20066
// Name: capitalize
// Dependencies: [20066, 625]

// Module 20065 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20066 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
