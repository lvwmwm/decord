// Module ID: 15254
// Function ID: 15255
// Dependencies: [15237]

// Module 15254
import _mod15237 from "module_15237" /* 15237 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15237(arg0, arg2);
  const tmp = new _mod15237(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
