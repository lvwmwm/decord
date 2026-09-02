// Module ID: 5091
// Function ID: 5092
// Name: NativePermissionsRequestOptions
// Dependencies: [5092, 5093, 5094, 5098, 2, 5095]

// Module 5091 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5093 */;
import importDefaultResult from "isEnabled" /* 5092 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
