// Module ID: 15297
// Function ID: 15298
// Dependencies: [15244, 15295, 15278]

// Module 15297
import _mod15244 from "module_15244" /* 15244 */;
import _mod15278 from "module_15278" /* 15278 */;
import defineProperty2 from "defineProperty2" /* 15295 */;


export default _mod15244 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15278(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
