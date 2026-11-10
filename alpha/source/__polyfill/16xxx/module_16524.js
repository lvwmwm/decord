// Module ID: 16524
// Function ID: 16525
// Dependencies: [16471, 16522, 16505]

// Module 16524
import _mod16471 from "module_16471" /* 16471 */;
import _mod16505 from "module_16505" /* 16505 */;
import defineProperty2 from "defineProperty2" /* 16522 */;


export default _mod16471 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16505(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
