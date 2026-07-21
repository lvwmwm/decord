// Module ID: 3764
// Function ID: 28849
// Name: BasicPermissionUtils
// Dependencies: []

// Module 3764 (BasicPermissionUtils)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class BasicPermissionUtils {
    constructor() {
      tmp = closure_2(this, BasicPermissionUtils);
      return;
    }
  }
  const importAll = BasicPermissionUtils;
  let obj = {
    key: "has",
    value(arg0, arg1) {
      return arg0 & arg1;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "asBasicFlag",
    value(arg0) {
      return BasicPermissionUtils(closure_1[2]).asUintN(20, arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "asBigFlag",
    value(arg0) {
      const self = this;
      if (!Object.hasOwn(this.cache, arg0)) {
        self.cache[arg0] = BasicPermissionUtils(closure_1[2]).deserialize(arg0);
        const obj = BasicPermissionUtils(closure_1[2]);
      }
      return self.cache[arg0];
    }
  };
  items[2] = obj;
  return callback(BasicPermissionUtils, null, items);
}();
tmp2.cache = {};
const result = arg1(dependencyMap[3]).fileFinishedImporting("utils/BasicPermissionUtils.tsx");

export default tmp2;
