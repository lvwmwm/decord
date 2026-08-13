// Module ID: 4902
// Function ID: 4903
// Name: NativePermissionsRequestOptions
// Dependencies: [4903, 4904, 4905, 4909, 2, 4906]

// Module 4902 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get";
import importDefaultResult from "isEnabled";

require("isEnabled").initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("requestPermissionCore").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;
