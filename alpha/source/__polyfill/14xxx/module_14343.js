// Module ID: 14343
// Function ID: 14344
// Dependencies: [14332]

// Module 14343
import _mod14332 from "module_14332" /* 14332 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14332(arg0, arg2);
  const tmp = new _mod14332(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
