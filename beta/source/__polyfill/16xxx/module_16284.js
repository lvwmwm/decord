// Module ID: 16284
// Function ID: 16285
// Dependencies: [16273]

// Module 16284
import _mod16273 from "module_16273" /* 16273 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16273(arg0, arg2);
  const tmp = new _mod16273(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
