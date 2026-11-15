// Module ID: 20313
// Function ID: 20314
// Name: capitalize
// Dependencies: [20314, 625]

// Module 20313 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20314 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
