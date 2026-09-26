// Module ID: 5387
// Function ID: 5388
// Name: NativePermissionUtils
// Dependencies: [5388, 5389, 5390, 5394, 2, 5391]

// Module 5387 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5388 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5389).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5390).default;
} else {
  _default = fn(5394).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5391).NativePermissionsRequestOptions;
