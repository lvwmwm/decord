// Module ID: 13818
// Function ID: 13819
// Name: all
// Dependencies: [13791]

// Module 13818 (all)
import all from "all" /* 13791 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
