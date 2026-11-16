// Module ID: 16281
// Function ID: 16282
// Dependencies: [16270]

// Module 16281
import _mod16270 from "module_16270" /* 16270 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16270(arg0, arg2);
  const tmp = new _mod16270(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
