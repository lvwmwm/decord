// Module ID: 4710
// Function ID: 40865
// Name: NativePermissionsRequestOptions
// Dependencies: [4711, 4712, 4713, 4717, 2, 4714]

// Module 4710 (NativePermissionsRequestOptions)
import { ProcessArgs } from "ProcessArgs";
import importDefaultResult from "_isNativeReflectConstruct";

require("_isNativeReflectConstruct").initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("_isNativeReflectConstruct").default;
} else {
  _default = require("_createForOfIteratorHelperLoose").default;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("NativePermissionBaseUtils").NativePermissionsRequestOptions;
