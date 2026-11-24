// Module ID: 15584
// Function ID: 15585
// Dependencies: [15585]

// Module 15584
import _mod15585 from "module_15585" /* 15585 */;


export default (obj) => {
  let tmp2;
  if (typeof obj === "object") {
    tmp2 = null !== obj;
  } else {
    tmp2 = _mod15585(obj);
  }
  return tmp2;
};
