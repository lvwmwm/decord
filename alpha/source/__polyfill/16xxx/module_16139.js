// Module ID: 16139
// Function ID: 16140
// Dependencies: [16086, 16137, 16120]

// Module 16139
import _mod16086 from "module_16086" /* 16086 */;
import _mod16120 from "module_16120" /* 16120 */;
import defineProperty2 from "defineProperty2" /* 16137 */;


export default _mod16086 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16120(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
