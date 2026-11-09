// Module ID: 16226
// Function ID: 16227
// Dependencies: [16212]

// Module 16226
import _mod16212 from "module_16212" /* 16212 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16212(arg0, arg2).compare;
  new _mod16212(arg0, arg2);
  const tmp2 = new _mod16212(arg1, arg2);
  return compare(tmp2);
};
