// Module ID: 15833
// Function ID: 15834
// Dependencies: [15816]

// Module 15833
import _mod15816 from "module_15816" /* 15816 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15816(arg0, arg2);
  const tmp = new _mod15816(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
