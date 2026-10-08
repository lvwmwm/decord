// Module ID: 7498
// Function ID: 7499
// Name: NativePermissionActionCreators
// Dependencies: [584, 2]

// Module 7498 (NativePermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
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
