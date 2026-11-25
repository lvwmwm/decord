// Module ID: 15493
// Function ID: 15494
// Dependencies: [15482]

// Module 15493
import _mod15482 from "module_15482" /* 15482 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15482(arg0, arg2);
  const tmp = new _mod15482(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
