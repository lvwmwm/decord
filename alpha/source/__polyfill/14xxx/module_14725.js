// Module ID: 14725
// Function ID: 14726
// Dependencies: [14714]

// Module 14725
import _mod14714 from "module_14714" /* 14714 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14714(arg0, arg2);
  const tmp = new _mod14714(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
