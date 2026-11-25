// Module ID: 15470
// Function ID: 15471
// Dependencies: [15453]

// Module 15470
import _mod15453 from "module_15453" /* 15453 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15453(arg0, arg2);
  const tmp = new _mod15453(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};
