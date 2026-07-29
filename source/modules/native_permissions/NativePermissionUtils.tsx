// Module ID: 4732
// Function ID: 4733
// Name: NativePermissionsRequestOptions
// Dependencies: [4733, 4734, 4735, 4739, 2, 4736]

// Module 4732 (NativePermissionsRequestOptions)
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
