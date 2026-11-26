// Module ID: 15521
// Function ID: 15522
// Dependencies: [15504]

// Module 15521
import _mod15504 from "module_15504" /* 15504 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15504(arg0, arg2);
  const tmp = new _mod15504(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
