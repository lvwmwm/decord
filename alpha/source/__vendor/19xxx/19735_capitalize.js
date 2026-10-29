// Module ID: 19735
// Function ID: 19736
// Name: capitalize
// Dependencies: [19736, 637]

// Module 19735 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19736 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
