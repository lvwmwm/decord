// Module ID: 4736
// Function ID: 41144
// Dependencies: []

// Module 4736
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
          let tmp2 = closure_0;
          let tmp3 = closure_0(arg1, arg0, key10007);
          // continue
        }
        continue;
      }
    };
  }
  const _Object2 = Object;
  const obj = { value: true };
  fn(require(dependencyMap[0]), exports);
  fn(require(dependencyMap[1]), exports);
} else {
  const _Object = Object;
}
