// Module ID: 16099
// Function ID: 16100
// Dependencies: [16046, 16097, 16080]

// Module 16099
import _mod16046 from "module_16046" /* 16046 */;
import _mod16080 from "module_16080" /* 16080 */;
import defineProperty2 from "defineProperty2" /* 16097 */;


export default _mod16046 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16080(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
