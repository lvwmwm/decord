// Module ID: 15600
// Function ID: 15601
// Dependencies: [15547, 15598, 15581]

// Module 15600
import _mod15547 from "module_15547" /* 15547 */;
import _mod15581 from "module_15581" /* 15581 */;
import defineProperty2 from "defineProperty2" /* 15598 */;


export default _mod15547 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15581(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
