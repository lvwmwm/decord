// Module ID: 5054
// Function ID: 5055
// Name: setPermission
// Dependencies: [709, 2]

// Module 5054 (setPermission)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const prototype = function NativePermissionActionCreators() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["setPermission"] = function setPermission(closure_0, DENIED) {
  let obj = dispatcherDefault;
  obj = { type: "SET_NATIVE_PERMISSION", permissionType: closure_0, state: DENIED };
  obj.dispatch(obj);
};
const result = set.fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default prototype;
