// Module ID: 5220
// Function ID: 5221
// Name: NativePermissionUtils
// Dependencies: [5221, 5222, 5223, 5227, 2, 5224]

// Module 5220 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5221 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5222).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5223).default;
} else {
  _default = fn(5227).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5224).NativePermissionsRequestOptions;
