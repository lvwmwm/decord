// Module ID: 16439
// Function ID: 16440
// Dependencies: [16386, 16437, 16420]

// Module 16439
import _mod16386 from "module_16386" /* 16386 */;
import _mod16420 from "module_16420" /* 16420 */;
import defineProperty2 from "defineProperty2" /* 16437 */;


export default _mod16386 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16420(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
