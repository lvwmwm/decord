// Module ID: 15914
// Function ID: 15915
// Dependencies: [15900]

// Module 15914
import _mod15900 from "module_15900" /* 15900 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod15900(arg0, arg2).compare;
  new _mod15900(arg0, arg2);
  const tmp2 = new _mod15900(arg1, arg2);
  return compare(tmp2);
};
