// Module ID: 16219
// Function ID: 16220
// Dependencies: [16202]

// Module 16219
import _mod16202 from "module_16202" /* 16202 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16202(arg0, arg2);
  const tmp = new _mod16202(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
