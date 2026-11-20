// Module ID: 16560
// Function ID: 16561
// Dependencies: [16549]

// Module 16560
import _mod16549 from "module_16549" /* 16549 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16549(arg0, arg2);
  const tmp = new _mod16549(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
