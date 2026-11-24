// Module ID: 15348
// Function ID: 15349
// Dependencies: [15331]

// Module 15348
import _mod15331 from "module_15331" /* 15331 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15331(arg0, arg2);
  const tmp = new _mod15331(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
