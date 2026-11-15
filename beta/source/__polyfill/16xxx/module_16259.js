// Module ID: 16259
// Function ID: 16260
// Dependencies: [16242]

// Module 16259
import _mod16242 from "module_16242" /* 16242 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16242(arg0, arg2);
  const tmp = new _mod16242(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
