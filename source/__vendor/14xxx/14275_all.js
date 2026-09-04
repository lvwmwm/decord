// Module ID: 14275
// Function ID: 14276
// Name: all
// Dependencies: [14248]

// Module 14275 (all)
import all from "all" /* 14248 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
