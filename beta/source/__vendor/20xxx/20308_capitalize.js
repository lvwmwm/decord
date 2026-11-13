// Module ID: 20308
// Function ID: 20309
// Name: capitalize
// Dependencies: [20309, 625]

// Module 20308 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20309 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
