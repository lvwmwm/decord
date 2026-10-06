// Module ID: 17910
// Function ID: 17911
// Name: capitalize
// Dependencies: [17911, 637]

// Module 17910 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 17911 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
