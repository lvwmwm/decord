// Module ID: 16805
// Function ID: 16806
// Dependencies: [16752, 16803, 16786]

// Module 16805
import _mod16752 from "module_16752" /* 16752 */;
import _mod16786 from "module_16786" /* 16786 */;
import defineProperty2 from "defineProperty2" /* 16803 */;


export default _mod16752 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16786(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
