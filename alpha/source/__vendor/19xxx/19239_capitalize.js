// Module ID: 19239
// Function ID: 19240
// Name: capitalize
// Dependencies: [19240, 637]

// Module 19239 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19240 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
