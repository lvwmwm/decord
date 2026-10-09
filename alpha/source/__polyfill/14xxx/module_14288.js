// Module ID: 14288
// Function ID: 14289
// Dependencies: [14277]

// Module 14288
import _mod14277 from "module_14277" /* 14277 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14277(arg0, arg2);
  const tmp = new _mod14277(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
