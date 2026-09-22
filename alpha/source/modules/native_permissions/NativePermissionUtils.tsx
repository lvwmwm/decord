// Module ID: 5357
// Function ID: 5358
// Name: NativePermissionUtils
// Dependencies: [5358, 5359, 5360, 5364, 2, 5361]

// Module 5357 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5358 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5359).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5360).default;
} else {
  _default = fn(5364).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5361).NativePermissionsRequestOptions;
