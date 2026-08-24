// Module ID: 4845
// Function ID: 4846
// Name: NativePermissionsRequestOptions
// Dependencies: [4846, 4847, 4848, 4852, 2, 4849]

// Module 4845 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 4847 */;
import importDefaultResult from "isEnabled" /* 4846 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
