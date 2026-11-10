// Module ID: 20295
// Function ID: 20296
// Name: capitalize
// Dependencies: [20296, 625]

// Module 20295 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20296 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
