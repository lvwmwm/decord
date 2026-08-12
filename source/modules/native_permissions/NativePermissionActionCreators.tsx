// Module ID: 4907
// Function ID: 4908
// Name: setPermission
// Dependencies: [709, 2]

// Module 4907 (setPermission)
const prototype = function NativePermissionActionCreators() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["setPermission"] = function setPermission(closure_0, c2) {
  let obj = importDefault(709);
  obj = { type: "SET_NATIVE_PERMISSION", permissionType: closure_0, state: c2 };
  obj.dispatch(obj);
};
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default prototype;
