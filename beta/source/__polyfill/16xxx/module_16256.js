// Module ID: 16256
// Function ID: 16257
// Dependencies: [16242]

// Module 16256
import _mod16242 from "module_16242" /* 16242 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16242(arg0, arg2).compare;
  new _mod16242(arg0, arg2);
  const tmp2 = new _mod16242(arg1, arg2);
  return compare(tmp2);
};
