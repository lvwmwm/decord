// Module ID: 16162
// Function ID: 16163
// Dependencies: [16145]

// Module 16162
import _mod16145 from "module_16145" /* 16145 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16145(arg0, arg2);
  const tmp = new _mod16145(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
