// Module ID: 13891
// Function ID: 13892
// Name: all
// Dependencies: [13864]

// Module 13891 (all)
import all from "all" /* 13864 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
