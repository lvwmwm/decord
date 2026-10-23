// Module ID: 15334
// Function ID: 15335
// Dependencies: [15323]

// Module 15334
import _mod15323 from "module_15323" /* 15323 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15323(arg0, arg2);
  const tmp = new _mod15323(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
