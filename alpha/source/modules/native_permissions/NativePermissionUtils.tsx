// Module ID: 8026
// Function ID: 8027
// Name: NativePermissionUtils
// Dependencies: [7443, 8027, 8031, 2, 8028]

// Module 8026 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7443 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8027 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8028 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8031 */;
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
