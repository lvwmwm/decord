// Module ID: 16172
// Function ID: 16173
// Dependencies: [16161]

// Module 16172
import _mod16161 from "module_16161" /* 16161 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16161(arg0, arg2);
  const tmp = new _mod16161(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
