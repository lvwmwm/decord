// Module ID: 16532
// Function ID: 16533
// Dependencies: [16518]

// Module 16532
import _mod16518 from "module_16518" /* 16518 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16518(arg0, arg2).compare;
  new _mod16518(arg0, arg2);
  const tmp2 = new _mod16518(arg1, arg2);
  return compare(tmp2);
};
