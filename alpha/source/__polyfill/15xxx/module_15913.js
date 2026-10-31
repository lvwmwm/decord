// Module ID: 15913
// Function ID: 15914
// Dependencies: [15896]

// Module 15913
import _mod15896 from "module_15896" /* 15896 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15896(arg0, arg2);
  const tmp = new _mod15896(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
