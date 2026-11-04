// Module ID: 16185
// Function ID: 16186
// Dependencies: [16174]

// Module 16185
import _mod16174 from "module_16174" /* 16174 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16174(arg0, arg2);
  const tmp = new _mod16174(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
