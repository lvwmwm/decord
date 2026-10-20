// Module ID: 15142
// Function ID: 15143
// Dependencies: [15125]

// Module 15142
import _mod15125 from "module_15125" /* 15125 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15125(arg0, arg2);
  const tmp = new _mod15125(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
