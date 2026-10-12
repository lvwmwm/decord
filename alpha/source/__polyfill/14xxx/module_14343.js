// Module ID: 14343
// Function ID: 14344
// Dependencies: [14326]

// Module 14343
import _mod14326 from "module_14326" /* 14326 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14326(arg0, arg2);
  const tmp = new _mod14326(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
