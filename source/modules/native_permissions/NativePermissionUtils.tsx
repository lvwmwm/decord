// Module ID: 4676
// Function ID: 40750
// Name: NativePermissionsRequestOptions
// Dependencies: [4677, 4678, 4679, 4683, 2, 4680]

// Module 4676 (NativePermissionsRequestOptions)
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
