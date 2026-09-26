// Module ID: 5451
// Function ID: 5452
// Name: NativePermissionUtils
// Dependencies: [5452, 5453, 5454, 5458, 2, 5455]

// Module 5451 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5452 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5453).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5454).default;
} else {
  _default = fn(5458).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5455).NativePermissionsRequestOptions;
