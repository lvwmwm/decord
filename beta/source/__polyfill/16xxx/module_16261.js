// Module ID: 16261
// Function ID: 16262
// Dependencies: [16244]

// Module 16261
import _mod16244 from "module_16244" /* 16244 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16244(arg0, arg2);
  const tmp = new _mod16244(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
