// Module ID: 14670
// Function ID: 14671
// Dependencies: [14643]

// Module 14670
import _mod14643 from "module_14643" /* 14643 */;


export default (arg0) => {
  if (_mod14643(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
