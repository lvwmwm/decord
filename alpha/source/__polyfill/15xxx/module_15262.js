// Module ID: 15262
// Function ID: 15263
// Dependencies: [15209, 15260, 15243]

// Module 15262
import _mod15209 from "module_15209" /* 15209 */;
import _mod15243 from "module_15243" /* 15243 */;
import defineProperty2 from "defineProperty2" /* 15260 */;


export default _mod15209 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15243(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
