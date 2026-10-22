// Module ID: 15555
// Function ID: 15556
// Dependencies: [15502, 15553, 15536]

// Module 15555
import _mod15502 from "module_15502" /* 15502 */;
import _mod15536 from "module_15536" /* 15536 */;
import defineProperty2 from "defineProperty2" /* 15553 */;


export default _mod15502 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15536(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
