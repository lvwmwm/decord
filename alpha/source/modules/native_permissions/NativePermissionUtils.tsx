// Module ID: 7706
// Function ID: 7707
// Name: NativePermissionUtils
// Dependencies: [7707, 7708, 7712, 2, 7709]

// Module 7706 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7707 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7708 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7709 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7712 */;
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
