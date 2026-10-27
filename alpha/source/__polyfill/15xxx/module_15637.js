// Module ID: 15637
// Function ID: 15638
// Dependencies: [15584, 15635, 15618]

// Module 15637
import _mod15584 from "module_15584" /* 15584 */;
import _mod15618 from "module_15618" /* 15618 */;
import defineProperty2 from "defineProperty2" /* 15635 */;


export default _mod15584 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15618(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
