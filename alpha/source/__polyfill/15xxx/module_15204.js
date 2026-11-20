// Module ID: 15204
// Function ID: 15205
// Dependencies: [15187]

// Module 15204
import _mod15187 from "module_15187" /* 15187 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15187(arg0, arg2);
  const tmp = new _mod15187(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
