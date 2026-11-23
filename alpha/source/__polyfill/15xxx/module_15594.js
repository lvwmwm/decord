// Module ID: 15594
// Function ID: 15595
// Dependencies: [15541, 15592, 15575]

// Module 15594
import _mod15541 from "module_15541" /* 15541 */;
import _mod15575 from "module_15575" /* 15575 */;
import defineProperty2 from "defineProperty2" /* 15592 */;


export default _mod15541 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15575(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
