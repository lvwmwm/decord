// Module ID: 15133
// Function ID: 15134
// Dependencies: [15122]

// Module 15133
import _mod15122 from "module_15122" /* 15122 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15122(arg0, arg2);
  const tmp = new _mod15122(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
