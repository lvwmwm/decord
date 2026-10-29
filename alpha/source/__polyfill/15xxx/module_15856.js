// Module ID: 15856
// Function ID: 15857
// Dependencies: [15845]

// Module 15856
import _mod15845 from "module_15845" /* 15845 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15845(arg0, arg2);
  const tmp = new _mod15845(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
