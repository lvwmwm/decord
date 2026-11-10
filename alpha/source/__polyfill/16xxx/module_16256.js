// Module ID: 16256
// Function ID: 16257
// Dependencies: [16239]

// Module 16256
import _mod16239 from "module_16239" /* 16239 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16239(arg0, arg2);
  const tmp = new _mod16239(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
