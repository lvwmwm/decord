// Module ID: 13578
// Function ID: 13579
// Dependencies: [13561]

// Module 13578
import _mod13561 from "module_13561" /* 13561 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13561(arg0, arg2);
  const tmp = new _mod13561(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
