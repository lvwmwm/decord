// Module ID: 15256
// Function ID: 15257
// Dependencies: [15245]

// Module 15256
import _mod15245 from "module_15245" /* 15245 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15245(arg0, arg2);
  const tmp = new _mod15245(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
