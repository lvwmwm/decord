// Module ID: 18359
// Function ID: 18360
// Name: capitalize
// Dependencies: [18360, 637]

// Module 18359 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18360 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
