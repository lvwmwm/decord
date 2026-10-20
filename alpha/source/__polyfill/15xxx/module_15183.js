// Module ID: 15183
// Function ID: 15184
// Dependencies: [15172]

// Module 15183
import _mod15172 from "module_15172" /* 15172 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15172(arg0, arg2);
  const tmp = new _mod15172(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
