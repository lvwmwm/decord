// Module ID: 14629
// Function ID: 14630
// Dependencies: [14602]

// Module 14629
import _mod14602 from "module_14602" /* 14602 */;


export default (arg0) => {
  if (_mod14602(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
