// Module ID: 15917
// Function ID: 15918
// Dependencies: [15900]

// Module 15917
import _mod15900 from "module_15900" /* 15900 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15900(arg0, arg2);
  const tmp = new _mod15900(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
