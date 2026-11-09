// Module ID: 16252
// Function ID: 16253
// Dependencies: [16241]

// Module 16252
import _mod16241 from "module_16241" /* 16241 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16241(arg0, arg2);
  const tmp = new _mod16241(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
