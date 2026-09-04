// Module ID: 5163
// Function ID: 5164
// Dependencies: [5164, 5165, 5166, 5167]

// Module 5163
import _mod5164 from "module_5164" /* 5164 */;
import _mod5165 from "module_5165" /* 5165 */;
import _mod5166 from "module_5166" /* 5166 */;
import _mod5167 from "module_5167" /* 5167 */;

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
  fn(_mod5164, exports);
  fn(_mod5165, exports);
  fn(_mod5166, exports);
  fn(_mod5167, exports);
} else {
  let _Object = Object;
}
