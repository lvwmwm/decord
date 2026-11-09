// Module ID: 16229
// Function ID: 16230
// Dependencies: [16212]

// Module 16229
import _mod16212 from "module_16212" /* 16212 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16212(arg0, arg2);
  const tmp = new _mod16212(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
