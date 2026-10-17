// Module ID: 18887
// Function ID: 18888
// Name: capitalize
// Dependencies: [18888, 637]

// Module 18887 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18888 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
