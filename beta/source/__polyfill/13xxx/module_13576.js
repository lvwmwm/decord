// Module ID: 13576
// Function ID: 13577
// Dependencies: [13559]

// Module 13576
import _mod13559 from "module_13559" /* 13559 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13559(arg0, arg2);
  const tmp = new _mod13559(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
