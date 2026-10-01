// Module ID: 13599
// Function ID: 13600
// Dependencies: [13588]

// Module 13599
import _mod13588 from "module_13588" /* 13588 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13588(arg0, arg2);
  const tmp = new _mod13588(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
