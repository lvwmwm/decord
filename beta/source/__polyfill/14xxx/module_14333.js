// Module ID: 14333
// Function ID: 14334
// Dependencies: [14316]

// Module 14333
import _mod14316 from "module_14316" /* 14316 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14316(arg0, arg2);
  const tmp = new _mod14316(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
