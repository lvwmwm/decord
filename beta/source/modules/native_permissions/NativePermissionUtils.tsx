// Module ID: 5451
// Function ID: 5452
// Name: NativePermissionUtils
// Dependencies: [5452, 5453, 5454, 5458, 2, 5455]

// Module 5451 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 5453 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 5454 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 5455 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 5458 */;
import NativePermissionManager_mod from "NativePermissionManager" /* 5452 */;
import size from "module_2" /* 2 */;

let _default;
let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  _default = nativePermissionDesktopNullUtils.default;
} else {
  _default = mobile_NativePermissionUtils.default;
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = NativePermissionBaseUtils.NativePermissionsRequestOptions;
