// Module ID: 16282
// Function ID: 16283
// Dependencies: [16271]

// Module 16282
import _mod16271 from "module_16271" /* 16271 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16271(arg0, arg2);
  const tmp = new _mod16271(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
