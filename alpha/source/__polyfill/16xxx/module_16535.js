// Module ID: 16535
// Function ID: 16536
// Dependencies: [16518]

// Module 16535
import _mod16518 from "module_16518" /* 16518 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16518(arg0, arg2);
  const tmp = new _mod16518(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
