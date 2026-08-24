// Module ID: 4851
// Function ID: 4852
// Name: setPermission
// Dependencies: [709, 2]

// Module 4851 (setPermission)
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
