// Module ID: 15107
// Function ID: 15108
// Dependencies: [15093]

// Module 15107
import _mod15093 from "module_15093" /* 15093 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod15093(arg0, arg2).compare;
  new _mod15093(arg0, arg2);
  const tmp2 = new _mod15093(arg1, arg2);
  return compare(tmp2);
};
