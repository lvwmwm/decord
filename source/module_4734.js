// Module ID: 4734
// Function ID: 41153
// Dependencies: [4735, 4736, 4737, 4738]

// Module 4734
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
  fn(require("module_4735"), exports);
  fn(require("module_4736"), exports);
  fn(require("module_4737"), exports);
  fn(require("module_4738"), exports);
} else {
  let _Object = Object;
}
