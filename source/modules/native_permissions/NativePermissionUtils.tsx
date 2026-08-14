// Module ID: 4924
// Function ID: 4925
// Name: NativePermissionsRequestOptions
// Dependencies: [4925, 4926, 4927, 4931, 2, 4928]

// Module 4924 (NativePermissionsRequestOptions)
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
