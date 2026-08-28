// Module ID: 13937
// Function ID: 13938
// Name: all
// Dependencies: [13910]

// Module 13937 (all)
import all from "all" /* 13910 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
