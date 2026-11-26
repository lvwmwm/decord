// Module ID: 20132
// Function ID: 20133
// Name: capitalize
// Dependencies: [20133, 625]

// Module 20132 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20133 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
