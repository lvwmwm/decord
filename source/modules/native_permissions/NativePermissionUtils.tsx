// Module ID: 5083
// Function ID: 5084
// Name: NativePermissionsRequestOptions
// Dependencies: [5084, 5085, 5086, 5090, 2, 5087]

// Module 5083 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5085 */;
import importDefaultResult from "isEnabled" /* 5084 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
