// Module ID: 15300
// Function ID: 15301
// Dependencies: [15289]

// Module 15300
import _mod15289 from "module_15289" /* 15289 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15289(arg0, arg2);
  const tmp = new _mod15289(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
