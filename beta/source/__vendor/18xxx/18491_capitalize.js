// Module ID: 18491
// Function ID: 18492
// Name: capitalize
// Dependencies: [18492, 637]

// Module 18491 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18492 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
