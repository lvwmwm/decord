// Module ID: 14702
// Function ID: 14703
// Dependencies: [14685]

// Module 14702
import _mod14685 from "module_14685" /* 14685 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14685(arg0, arg2);
  const tmp = new _mod14685(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
