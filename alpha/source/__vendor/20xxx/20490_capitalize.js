// Module ID: 20490
// Function ID: 20491
// Name: capitalize
// Dependencies: [20491, 625]

// Module 20490 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20491 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
