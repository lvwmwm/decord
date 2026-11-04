// Module ID: 15370
// Function ID: 15371
// Dependencies: [15353]

// Module 15370
import _mod15353 from "module_15353" /* 15353 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15353(arg0, arg2);
  const tmp = new _mod15353(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
