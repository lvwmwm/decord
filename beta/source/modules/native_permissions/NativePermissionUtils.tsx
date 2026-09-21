// Module ID: 5355
// Function ID: 5356
// Name: NativePermissionUtils
// Dependencies: [5356, 5357, 5358, 5362, 2, 5359]

// Module 5355 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5356 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5357).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5358).default;
} else {
  _default = fn(5362).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5359).NativePermissionsRequestOptions;
