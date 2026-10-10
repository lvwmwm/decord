// Module ID: 14320
// Function ID: 14321
// Dependencies: [14303]

// Module 14320
import _mod14303 from "module_14303" /* 14303 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14303(arg0, arg2);
  const tmp = new _mod14303(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
