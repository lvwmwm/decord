// Module ID: 5648
// Function ID: 5649
// Name: NativePermissionUtils
// Dependencies: [5649, 5650, 5651, 5655, 2, 5652]

// Module 5648 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5649 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5650).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5651).default;
} else {
  _default = fn(5655).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5652).NativePermissionsRequestOptions;
