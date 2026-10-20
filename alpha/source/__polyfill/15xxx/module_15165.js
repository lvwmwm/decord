// Module ID: 15165
// Function ID: 15166
// Dependencies: [15154]

// Module 15165
import _mod15154 from "module_15154" /* 15154 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15154(arg0, arg2);
  const tmp = new _mod15154(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
