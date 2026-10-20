// Module ID: 7495
// Function ID: 7496
// Name: NativePermissionUtils
// Dependencies: [6911, 7496, 7500, 2, 7497]

// Module 7495 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6911 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7496 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7497 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7500 */;
import size from "module_2" /* 2 */;

let _default;
const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  _default = nativePermissionDesktopNullUtils.default;
} else {
  _default = mobile_NativePermissionUtils.default;
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = NativePermissionBaseUtils.NativePermissionsRequestOptions;
