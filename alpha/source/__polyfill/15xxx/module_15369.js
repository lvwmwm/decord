// Module ID: 15369
// Function ID: 15370
// Dependencies: [15355]

// Module 15369
import _mod15355 from "module_15355" /* 15355 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod15355(arg0, arg2).compare;
  new _mod15355(arg0, arg2);
  const tmp2 = new _mod15355(arg1, arg2);
  return compare(tmp2);
};
