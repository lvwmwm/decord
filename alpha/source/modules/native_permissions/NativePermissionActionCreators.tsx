// Module ID: 7953
// Function ID: 7954
// Name: NativePermissionActionCreators
// Dependencies: [572, 2]

// Module 7953 (NativePermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

class NativePermissionActionCreators {
  static setPermission(permissionType, DENIED) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SET_NATIVE_PERMISSION", permissionType, state: DENIED };
    obj.dispatch(obj2);
  }
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default NativePermissionActionCreators;
