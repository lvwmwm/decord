// Module ID: 14348
// Function ID: 14349
// Dependencies: [14331]

// Module 14348
import _mod14331 from "module_14331" /* 14331 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14331(arg0, arg2);
  const tmp = new _mod14331(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
