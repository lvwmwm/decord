// Module ID: 16255
// Function ID: 16256
// Dependencies: [16241]

// Module 16255
import _mod16241 from "module_16241" /* 16241 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16241(arg0, arg2).compare;
  new _mod16241(arg0, arg2);
  const tmp2 = new _mod16241(arg1, arg2);
  return compare(tmp2);
};
