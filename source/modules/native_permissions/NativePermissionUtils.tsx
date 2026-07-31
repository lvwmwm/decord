// Module ID: 4736
// Function ID: 4737
// Name: NativePermissionsRequestOptions
// Dependencies: [4737, 4738, 4739, 4743, 2, 4740]

// Module 4736 (NativePermissionsRequestOptions)
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
