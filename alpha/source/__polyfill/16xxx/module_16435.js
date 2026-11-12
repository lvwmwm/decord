// Module ID: 16435
// Function ID: 16436
// Dependencies: [16424]

// Module 16435
import _mod16424 from "module_16424" /* 16424 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16424(arg0, arg2);
  const tmp = new _mod16424(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
