// Module ID: 15325
// Function ID: 15326
// Dependencies: [15308]

// Module 15325
import _mod15308 from "module_15308" /* 15308 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15308(arg0, arg2);
  const tmp = new _mod15308(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
