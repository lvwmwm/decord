// Module ID: 16180
// Function ID: 16181
// Dependencies: [16127, 16178, 16161]

// Module 16180
import _mod16127 from "module_16127" /* 16127 */;
import _mod16161 from "module_16161" /* 16161 */;
import defineProperty2 from "defineProperty2" /* 16178 */;


export default _mod16127 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16161(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
