// Module ID: 19201
// Function ID: 19202
// Name: capitalize
// Dependencies: [19202, 637]

// Module 19201 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19202 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
