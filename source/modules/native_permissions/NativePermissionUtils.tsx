// Module ID: 5030
// Function ID: 5031
// Name: NativePermissionsRequestOptions
// Dependencies: [5031, 5032, 5033, 5037, 2, 5034]

// Module 5030 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5032 */;
import importDefaultResult from "isEnabled" /* 5031 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
