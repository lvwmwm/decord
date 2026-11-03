// Module ID: 16057
// Function ID: 16058
// Dependencies: [16043]

// Module 16057
import _mod16043 from "module_16043" /* 16043 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16043(arg0, arg2).compare;
  new _mod16043(arg0, arg2);
  const tmp2 = new _mod16043(arg1, arg2);
  return compare(tmp2);
};
