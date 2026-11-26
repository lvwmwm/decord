// Module ID: 18507
// Function ID: 18508
// Name: arrayIncludes
// Dependencies: [18508]

// Module 18507 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18508 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
