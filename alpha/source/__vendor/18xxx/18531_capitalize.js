// Module ID: 18531
// Function ID: 18532
// Name: capitalize
// Dependencies: [18532, 637]

// Module 18531 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18532 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
