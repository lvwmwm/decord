// Module ID: 14584
// Function ID: 14585
// Dependencies: [14531, 14582, 14565]

// Module 14584
import _mod14531 from "module_14531" /* 14531 */;
import _mod14565 from "module_14565" /* 14565 */;
import defineProperty2 from "defineProperty2" /* 14582 */;


export default _mod14531 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14565(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
