// Module ID: 15041
// Function ID: 15042
// Dependencies: [15024]

// Module 15041
import _mod15024 from "module_15024" /* 15024 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15024(arg0, arg2);
  const tmp = new _mod15024(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
