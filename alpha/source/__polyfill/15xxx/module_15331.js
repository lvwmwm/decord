// Module ID: 15331
// Function ID: 15332
// Dependencies: [15314]

// Module 15331
import _mod15314 from "module_15314" /* 15314 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15314(arg0, arg2);
  const tmp = new _mod15314(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
