// Module ID: 13869
// Function ID: 13870
// Dependencies: [13858]

// Module 13869
import _mod13858 from "module_13858" /* 13858 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13858(arg0, arg2);
  const tmp = new _mod13858(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
