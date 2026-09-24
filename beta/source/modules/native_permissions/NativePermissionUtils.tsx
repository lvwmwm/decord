// Module ID: 5389
// Function ID: 5390
// Name: NativePermissionUtils
// Dependencies: [5390, 5391, 5392, 5396, 2, 5393]

// Module 5389 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5390 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5391).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5392).default;
} else {
  _default = fn(5396).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5393).NativePermissionsRequestOptions;
