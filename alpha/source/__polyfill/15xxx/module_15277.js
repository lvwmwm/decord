// Module ID: 15277
// Function ID: 15278
// Dependencies: [15266]

// Module 15277
import _mod15266 from "module_15266" /* 15266 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15266(arg0, arg2);
  const tmp = new _mod15266(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
