// Module ID: 16417
// Function ID: 16418
// Dependencies: [16400]

// Module 16417
import _mod16400 from "module_16400" /* 16400 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16400(arg0, arg2);
  const tmp = new _mod16400(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
