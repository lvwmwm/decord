// Module ID: 5168
// Function ID: 5169
// Dependencies: [5169, 5170]

// Module 5168
import _mod5169 from "module_5169" /* 5169 */;
import _mod5170 from "module_5170" /* 5170 */;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp5 = key10007;
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp3 = self2;
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
          let tmp2 = hasOwnPropertyResult;
        }
      }
    };
  }
  const _Object2 = Object;
  fn(_mod5169, exports);
  fn(_mod5170, exports);
} else {
  let _Object = Object;
}
