// Module ID: 4767
// Function ID: 41279
// Dependencies: [4768]

// Module 4767
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
        let tmp4 = key10007;
        let callResult = "default" === key10007;
        if (!callResult) {
          let _Object = Object;
          callResult = hasOwnProperty.call(arg1, key10007);
        }
        if (callResult) {
          continue;
        } else {
          let tmp2 = self2;
          let tmp3 = self2(arg1, arg0, key10007);
          continue;
        }
        continue;
      }
    };
  }
  const _Object2 = Object;
  let obj = { value: true };
  fn(require("module_4768"), exports);
} else {
  let _Object = Object;
}
