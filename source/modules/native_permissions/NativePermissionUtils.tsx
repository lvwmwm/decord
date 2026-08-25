// Module ID: 4964
// Function ID: 4965
// Name: NativePermissionsRequestOptions
// Dependencies: [4965, 4966, 4967, 4971, 2, 4968]

// Module 4964 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 4966 */;
import importDefaultResult from "isEnabled" /* 4965 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
