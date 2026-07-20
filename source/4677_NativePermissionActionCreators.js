// Module ID: 4677
// Function ID: 40711
// Name: NativePermissionActionCreators
// Dependencies: []

// Module 4677 (NativePermissionActionCreators)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class NativePermissionActionCreators {
    constructor() {
      tmp = closure_2(this, NativePermissionActionCreators);
      return;
    }
  }
  const importDefault = NativePermissionActionCreators;
  const items = [
    {
      key: "setPermission",
      value(permissionType, state) {
        let obj = NativePermissionActionCreators(closure_1[2]);
        obj = { type: "SET_NATIVE_PERMISSION", permissionType, state };
        obj.dispatch(obj);
      }
    }
  ];
  return callback(NativePermissionActionCreators, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default tmp2;
