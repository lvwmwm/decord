// Module ID: 7499
// Function ID: 7500
// Name: NativePermissionUtils
// Dependencies: [6910, 7500, 7504, 2, 7501]

// Module 7499 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6910 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7500 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7501 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7504 */;
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
