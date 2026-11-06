// Module ID: 16171
// Function ID: 16172
// Dependencies: [16154]

// Module 16171
import _mod16154 from "module_16154" /* 16154 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16154(arg0, arg2);
  const tmp = new _mod16154(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
