// Module ID: 14169
// Function ID: 14170
// Dependencies: [14152]

// Module 14169
import _mod14152 from "module_14152" /* 14152 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14152(arg0, arg2);
  const tmp = new _mod14152(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
