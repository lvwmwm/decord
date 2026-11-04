// Module ID: 8097
// Function ID: 8098
// Name: NativePermissionUtils
// Dependencies: [7519, 8098, 8102, 2, 8099]

// Module 8097 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7519 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8098 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8099 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8102 */;
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
