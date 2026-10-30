// Module ID: 15872
// Function ID: 15873
// Dependencies: [15855]

// Module 15872
import _mod15855 from "module_15855" /* 15855 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15855(arg0, arg2);
  const tmp = new _mod15855(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
