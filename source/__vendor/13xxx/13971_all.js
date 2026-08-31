// Module ID: 13971
// Function ID: 13972
// Name: all
// Dependencies: [13944]

// Module 13971 (all)
import all from "all" /* 13944 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
