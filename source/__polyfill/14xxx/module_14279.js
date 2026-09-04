// Module ID: 14279
// Function ID: 14280
// Dependencies: [14226, 14277, 14260]

// Module 14279
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14226 */;
import _mod14260 from "module_14260" /* 14260 */;
import defineProperty from "defineProperty" /* 14277 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14260(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
