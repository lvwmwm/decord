// Module ID: 15895
// Function ID: 15896
// Dependencies: [15884]

// Module 15895
import _mod15884 from "module_15884" /* 15884 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15884(arg0, arg2);
  const tmp = new _mod15884(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
