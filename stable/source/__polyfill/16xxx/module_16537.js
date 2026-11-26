// Module ID: 16537
// Function ID: 16538
// Dependencies: [16520]

// Module 16537
import _mod16520 from "module_16520" /* 16520 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16520(arg0, arg2);
  const tmp = new _mod16520(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
