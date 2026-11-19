// Module ID: 15240
// Function ID: 15241
// Dependencies: [15223]

// Module 15240
import _mod15223 from "module_15223" /* 15223 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15223(arg0, arg2);
  const tmp = new _mod15223(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
