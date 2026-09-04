// Module ID: 5100
// Function ID: 5101
// Name: NativePermissionsRequestOptions
// Dependencies: [5101, 5102, 5103, 5107, 2, 5104]

// Module 5100 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5102 */;
import importDefaultResult from "isEnabled" /* 5101 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
