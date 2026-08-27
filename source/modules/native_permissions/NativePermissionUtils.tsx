// Module ID: 5035
// Function ID: 5036
// Name: NativePermissionsRequestOptions
// Dependencies: [5036, 5037, 5038, 5042, 2, 5039]

// Module 5035 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5037 */;
import importDefaultResult from "isEnabled" /* 5036 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
