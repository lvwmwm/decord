// Module ID: 4675
// Function ID: 40737
// Name: NativePermissionsRequestOptions
// Dependencies: [4676, 4677, 4678, 4682, 2, 4679]

// Module 4675 (NativePermissionsRequestOptions)
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
