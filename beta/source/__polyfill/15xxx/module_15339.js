// Module ID: 15339
// Function ID: 15340
// Dependencies: [15322]

// Module 15339
import _mod15322 from "module_15322" /* 15322 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15322(arg0, arg2);
  const tmp = new _mod15322(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
