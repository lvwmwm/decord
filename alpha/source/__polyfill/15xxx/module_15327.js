// Module ID: 15327
// Function ID: 15328
// Dependencies: [15310]

// Module 15327
import _mod15310 from "module_15310" /* 15310 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15310(arg0, arg2);
  const tmp = new _mod15310(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
