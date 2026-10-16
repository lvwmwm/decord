// Module ID: 18812
// Function ID: 18813
// Name: capitalize
// Dependencies: [18813, 637]

// Module 18812 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18813 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
