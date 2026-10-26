// Module ID: 15601
// Function ID: 15602
// Dependencies: [15548, 15599, 15582]

// Module 15601
import _mod15548 from "module_15548" /* 15548 */;
import _mod15582 from "module_15582" /* 15582 */;
import defineProperty2 from "defineProperty2" /* 15599 */;


export default _mod15548 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15582(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
