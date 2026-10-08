// Module ID: 7494
// Function ID: 7495
// Name: NativePermissionUtils
// Dependencies: [6897, 7495, 7499, 2, 7496]

// Module 7494 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6897 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7495 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7496 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7499 */;
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
