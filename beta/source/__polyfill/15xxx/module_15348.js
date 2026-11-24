// Module ID: 15348
// Function ID: 15349
// Dependencies: [15337]

// Module 15348
import _mod15337 from "module_15337" /* 15337 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15337(arg0, arg2);
  const tmp = new _mod15337(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
