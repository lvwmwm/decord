// Module ID: 7719
// Function ID: 7720
// Name: NativePermissionUtils
// Dependencies: [7132, 7720, 7724, 2, 7721]

// Module 7719 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7132 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7720 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7721 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7724 */;
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
