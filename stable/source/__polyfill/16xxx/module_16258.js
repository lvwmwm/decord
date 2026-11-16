// Module ID: 16258
// Function ID: 16259
// Dependencies: [16241]

// Module 16258
import _mod16241 from "module_16241" /* 16241 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16241(arg0, arg2);
  const tmp = new _mod16241(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
