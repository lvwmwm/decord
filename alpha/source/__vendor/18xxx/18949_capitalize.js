// Module ID: 18949
// Function ID: 18950
// Name: capitalize
// Dependencies: [18950, 637]

// Module 18949 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18950 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
