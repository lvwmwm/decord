// Module ID: 16216
// Function ID: 16217
// Dependencies: [16202]

// Module 16216
import _mod16202 from "module_16202" /* 16202 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16202(arg0, arg2).compare;
  new _mod16202(arg0, arg2);
  const tmp2 = new _mod16202(arg1, arg2);
  return compare(tmp2);
};
