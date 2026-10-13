// Module ID: 14687
// Function ID: 14688
// Dependencies: [14676]

// Module 14687
import _mod14676 from "module_14676" /* 14676 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14676(arg0, arg2);
  const tmp = new _mod14676(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
