// Module ID: 14192
// Function ID: 14193
// Dependencies: [14181]

// Module 14192
import _mod14181 from "module_14181" /* 14181 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14181(arg0, arg2);
  const tmp = new _mod14181(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
