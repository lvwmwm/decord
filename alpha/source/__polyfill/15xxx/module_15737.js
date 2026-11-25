// Module ID: 15737
// Function ID: 15738
// Dependencies: [15684, 15735, 15718]

// Module 15737
import _mod15684 from "module_15684" /* 15684 */;
import _mod15718 from "module_15718" /* 15718 */;
import defineProperty2 from "defineProperty2" /* 15735 */;


export default _mod15684 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15718(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
