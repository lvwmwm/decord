// Module ID: 15290
// Function ID: 15291
// Dependencies: [15273]

// Module 15290
import _mod15273 from "module_15273" /* 15273 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15273(arg0, arg2);
  const tmp = new _mod15273(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
