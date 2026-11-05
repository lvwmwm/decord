// Module ID: 16175
// Function ID: 16176
// Dependencies: [16158]

// Module 16175
import _mod16158 from "module_16158" /* 16158 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16158(arg0, arg2);
  const tmp = new _mod16158(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
