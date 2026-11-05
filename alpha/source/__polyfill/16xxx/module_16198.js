// Module ID: 16198
// Function ID: 16199
// Dependencies: [16187]

// Module 16198
import _mod16187 from "module_16187" /* 16187 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16187(arg0, arg2);
  const tmp = new _mod16187(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
