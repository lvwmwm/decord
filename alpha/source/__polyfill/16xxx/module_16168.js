// Module ID: 16168
// Function ID: 16169
// Dependencies: [16154]

// Module 16168
import _mod16154 from "module_16154" /* 16154 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16154(arg0, arg2).compare;
  new _mod16154(arg0, arg2);
  const tmp2 = new _mod16154(arg1, arg2);
  return compare(tmp2);
};
