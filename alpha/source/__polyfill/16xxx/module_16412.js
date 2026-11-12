// Module ID: 16412
// Function ID: 16413
// Dependencies: [16395]

// Module 16412
import _mod16395 from "module_16395" /* 16395 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16395(arg0, arg2);
  const tmp = new _mod16395(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
