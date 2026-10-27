// Module ID: 18891
// Function ID: 18892
// Name: capitalize
// Dependencies: [18892, 637]

// Module 18891 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18892 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
