// Module ID: 4681
// Function ID: 40790
// Name: NativePermissionActionCreators
// Dependencies: [6, 7, 686, 2]

// Module 4681 (NativePermissionActionCreators)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class NativePermissionActionCreators {
    constructor() {
      tmp = outer1_2(this, NativePermissionActionCreators);
      return;
    }
  }
  const items = [
    {
      key: "setPermission",
      value(permissionType, state) {
        let obj = NativePermissionActionCreators(outer1_1[2]);
        obj = { type: "SET_NATIVE_PERMISSION", permissionType, state };
        obj.dispatch(obj);
      }
    }
  ];
  return callback(NativePermissionActionCreators, null, items);
})();
const result = require("dispatcher").fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default tmp2;
