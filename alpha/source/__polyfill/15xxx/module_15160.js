// Module ID: 15160
// Function ID: 15161
// Dependencies: [15143]

// Module 15160
import _mod15143 from "module_15143" /* 15143 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15143(arg0, arg2);
  const tmp = new _mod15143(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
