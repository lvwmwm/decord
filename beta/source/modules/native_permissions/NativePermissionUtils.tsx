// Module ID: 5452
// Function ID: 5453
// Name: NativePermissionUtils
// Dependencies: [5453, 5454, 5455, 5459, 2, 5456]

// Module 5452 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 5454 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 5455 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 5456 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 5459 */;
import NativePermissionManager_mod from "NativePermissionManager" /* 5453 */;
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
