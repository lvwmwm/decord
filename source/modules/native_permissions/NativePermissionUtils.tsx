// Module ID: 5139
// Function ID: 5140
// Name: NativePermissionsRequestOptions
// Dependencies: [5140, 5141, 5142, 5146, 2, 5143]

// Module 5139 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5141 */;
import importDefaultResult from "isEnabled" /* 5140 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
