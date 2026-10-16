// Module ID: 15307
// Function ID: 15308
// Dependencies: [15254, 15305, 15288]

// Module 15307
import _mod15254 from "module_15254" /* 15254 */;
import _mod15288 from "module_15288" /* 15288 */;
import defineProperty2 from "defineProperty2" /* 15305 */;


export default _mod15254 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15288(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
