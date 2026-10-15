// Module ID: 18770
// Function ID: 18771
// Name: capitalize
// Dependencies: [18771, 637]

// Module 18770 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18771 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
