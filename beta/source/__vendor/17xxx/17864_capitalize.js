// Module ID: 17864
// Function ID: 17865
// Name: capitalize
// Dependencies: [17865, 637]

// Module 17864 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 17865 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
