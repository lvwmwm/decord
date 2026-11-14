// Module ID: 20640
// Function ID: 20641
// Name: capitalize
// Dependencies: [20641, 625]

// Module 20640 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20641 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
