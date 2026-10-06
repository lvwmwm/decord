// Module ID: 13846
// Function ID: 13847
// Dependencies: [13793, 13844, 13827]

// Module 13846
import _mod13793 from "module_13793" /* 13793 */;
import _mod13827 from "module_13827" /* 13827 */;
import defineProperty2 from "defineProperty2" /* 13844 */;


export default _mod13793 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod13827(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
