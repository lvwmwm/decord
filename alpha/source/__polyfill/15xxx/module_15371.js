// Module ID: 15371
// Function ID: 15372
// Dependencies: [15360]

// Module 15371
import _mod15360 from "module_15360" /* 15360 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15360(arg0, arg2);
  const tmp = new _mod15360(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
