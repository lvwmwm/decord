// Module ID: 15064
// Function ID: 15065
// Dependencies: [15053]

// Module 15064
import _mod15053 from "module_15053" /* 15053 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15053(arg0, arg2);
  const tmp = new _mod15053(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
