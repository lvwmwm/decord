// Module ID: 15395
// Function ID: 15396
// Dependencies: [15384]

// Module 15395
import _mod15384 from "module_15384" /* 15384 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15384(arg0, arg2);
  const tmp = new _mod15384(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
