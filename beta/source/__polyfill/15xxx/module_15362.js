// Module ID: 15362
// Function ID: 15363
// Dependencies: [15351]

// Module 15362
import _mod15351 from "module_15351" /* 15351 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15351(arg0, arg2);
  const tmp = new _mod15351(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
