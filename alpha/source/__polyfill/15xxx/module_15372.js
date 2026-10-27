// Module ID: 15372
// Function ID: 15373
// Dependencies: [15355]

// Module 15372
import _mod15355 from "module_15355" /* 15355 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15355(arg0, arg2);
  const tmp = new _mod15355(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
