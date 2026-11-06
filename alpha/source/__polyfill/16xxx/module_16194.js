// Module ID: 16194
// Function ID: 16195
// Dependencies: [16183]

// Module 16194
import _mod16183 from "module_16183" /* 16183 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16183(arg0, arg2);
  const tmp = new _mod16183(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
