// Module ID: 16327
// Function ID: 16328
// Dependencies: [16274, 16325, 16308]

// Module 16327
import _mod16274 from "module_16274" /* 16274 */;
import _mod16308 from "module_16308" /* 16308 */;
import defineProperty2 from "defineProperty2" /* 16325 */;


export default _mod16274 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16308(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
