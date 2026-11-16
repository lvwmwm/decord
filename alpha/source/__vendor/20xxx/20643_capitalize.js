// Module ID: 20643
// Function ID: 20644
// Name: capitalize
// Dependencies: [20644, 625]

// Module 20643 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20644 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
