// Module ID: 17495
// Function ID: 17496
// Name: capitalize
// Dependencies: [17496, 626]

// Module 17495 (capitalize)
import toString from "toString" /* 626 */;
import createCaseFirst from "createCaseFirst" /* 17496 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
