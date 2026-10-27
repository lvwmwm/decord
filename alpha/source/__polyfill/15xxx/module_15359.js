// Module ID: 15359
// Function ID: 15360
// Dependencies: [15348]

// Module 15359
import _mod15348 from "module_15348" /* 15348 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15348(arg0, arg2);
  const tmp = new _mod15348(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
