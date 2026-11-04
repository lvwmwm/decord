// Module ID: 16159
// Function ID: 16160
// Dependencies: [16145]

// Module 16159
import _mod16145 from "module_16145" /* 16145 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16145(arg0, arg2).compare;
  new _mod16145(arg0, arg2);
  const tmp2 = new _mod16145(arg1, arg2);
  return compare(tmp2);
};
