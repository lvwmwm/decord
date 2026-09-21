// Module ID: 14305
// Function ID: 14306
// Dependencies: [14288]

// Module 14305
import _mod14288 from "module_14288" /* 14288 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14288(arg0, arg2);
  const tmp = new _mod14288(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
