// Module ID: 14928
// Function ID: 14929
// Dependencies: [14875, 14926, 14909]

// Module 14928
import _mod14875 from "module_14875" /* 14875 */;
import _mod14909 from "module_14909" /* 14909 */;
import defineProperty2 from "defineProperty2" /* 14926 */;


export default _mod14875 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14909(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
