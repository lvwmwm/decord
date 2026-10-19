// Module ID: 15114
// Function ID: 15115
// Dependencies: [15097]

// Module 15114
import _mod15097 from "module_15097" /* 15097 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15097(arg0, arg2);
  const tmp = new _mod15097(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
