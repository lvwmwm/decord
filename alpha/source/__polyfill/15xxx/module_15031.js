// Module ID: 15031
// Function ID: 15032
// Dependencies: [15014]

// Module 15031
import _mod15014 from "module_15014" /* 15014 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15014(arg0, arg2);
  const tmp = new _mod15014(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
