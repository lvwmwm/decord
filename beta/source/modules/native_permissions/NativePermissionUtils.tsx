// Module ID: 8059
// Function ID: 8060
// Name: NativePermissionUtils
// Dependencies: [7476, 8060, 8064, 2, 8061]

// Module 8059 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7476 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8060 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8061 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8064 */;
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
