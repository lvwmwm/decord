// Module ID: 16534
// Function ID: 16535
// Dependencies: [16520]

// Module 16534
import _mod16520 from "module_16520" /* 16520 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16520(arg0, arg2).compare;
  new _mod16520(arg0, arg2);
  const tmp2 = new _mod16520(arg1, arg2);
  return compare(tmp2);
};
