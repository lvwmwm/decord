// Module ID: 15263
// Function ID: 15264
// Dependencies: [15252]

// Module 15263
import _mod15252 from "module_15252" /* 15252 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15252(arg0, arg2);
  const tmp = new _mod15252(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
