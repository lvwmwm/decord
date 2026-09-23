// Module ID: 5441
// Function ID: 5442
// Name: NativePermissionUtils
// Dependencies: [5442, 5443, 5444, 5448, 2, 5445]

// Module 5441 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5442 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5443).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5444).default;
} else {
  _default = fn(5448).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5445).NativePermissionsRequestOptions;
