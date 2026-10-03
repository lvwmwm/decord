// Module ID: 17840
// Function ID: 17841
// Name: capitalize
// Dependencies: [17841, 637]

// Module 17840 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 17841 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
