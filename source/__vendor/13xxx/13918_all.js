// Module ID: 13918
// Function ID: 13919
// Name: all
// Dependencies: [13891]

// Module 13918 (all)
import all from "all" /* 13891 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
