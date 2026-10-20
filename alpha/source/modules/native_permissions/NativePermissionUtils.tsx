// Module ID: 7829
// Function ID: 7830
// Name: NativePermissionUtils
// Dependencies: [7256, 7830, 7834, 2, 7831]

// Module 7829 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7256 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7830 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7831 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7834 */;
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
