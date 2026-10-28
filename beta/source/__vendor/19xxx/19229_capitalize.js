// Module ID: 19229
// Function ID: 19230
// Name: capitalize
// Dependencies: [19230, 637]

// Module 19229 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19230 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
