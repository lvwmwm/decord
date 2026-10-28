// Module ID: 15621
// Function ID: 15622
// Dependencies: [15610]

// Module 15621
import _mod15610 from "module_15610" /* 15610 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15610(arg0, arg2);
  const tmp = new _mod15610(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
