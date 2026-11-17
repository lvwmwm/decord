// Module ID: 16594
// Function ID: 16595
// Dependencies: [16583]

// Module 16594
import _mod16583 from "module_16583" /* 16583 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16583(arg0, arg2);
  const tmp = new _mod16583(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
