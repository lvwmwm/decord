// Module ID: 14998
// Function ID: 14999
// Dependencies: [14981]

// Module 14998
import _mod14981 from "module_14981" /* 14981 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14981(arg0, arg2);
  const tmp = new _mod14981(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
