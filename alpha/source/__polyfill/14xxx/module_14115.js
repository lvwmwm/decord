// Module ID: 14115
// Function ID: 14116
// Dependencies: [14062, 14113, 14096]

// Module 14115
import _mod14062 from "module_14062" /* 14062 */;
import _mod14096 from "module_14096" /* 14096 */;
import defineProperty2 from "defineProperty2" /* 14113 */;


export default _mod14062 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14096(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
