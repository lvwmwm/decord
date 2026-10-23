// Module ID: 15311
// Function ID: 15312
// Dependencies: [15294]

// Module 15311
import _mod15294 from "module_15294" /* 15294 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15294(arg0, arg2);
  const tmp = new _mod15294(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
