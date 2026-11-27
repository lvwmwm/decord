// Module ID: 15525
// Function ID: 15526
// Dependencies: [15511]

// Module 15525
import _mod15511 from "module_15511" /* 15511 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod15511(arg0, arg2).compare;
  new _mod15511(arg0, arg2);
  const tmp2 = new _mod15511(arg1, arg2);
  return compare(tmp2);
};
