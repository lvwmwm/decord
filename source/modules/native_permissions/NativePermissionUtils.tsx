// Module ID: 4842
// Function ID: 4843
// Name: NativePermissionsRequestOptions
// Dependencies: [4843, 4844, 4845, 4849, 2, 4846]

// Module 4842 (NativePermissionsRequestOptions)
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
