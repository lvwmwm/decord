// Module ID: 15912
// Function ID: 15913
// Dependencies: [15895]

// Module 15912
import _mod15895 from "module_15895" /* 15895 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15895(arg0, arg2);
  const tmp = new _mod15895(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
