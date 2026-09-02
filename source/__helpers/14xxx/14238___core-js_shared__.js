// Module ID: 14238
// Function ID: 14239
// Name: __core-js_shared__
// Dependencies: [14190, 14197]

// Module 14238 (__core-js_shared__)
import __core_js_shared__ from "__core-js_shared__" /* 14190 */;
import sum from "sum" /* 14197 */;

let closure_2 = __core_js_shared__("keys");

export default (arg0) => {
  let tmp2 = table[arg0];
  if (!tmp2) {
    const tmp5 = sum(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
