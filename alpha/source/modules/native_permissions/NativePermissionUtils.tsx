// Module ID: 8030
// Function ID: 8031
// Name: NativePermissionUtils
// Dependencies: [7446, 8031, 8035, 2, 8032]

// Module 8030 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7446 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8031 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8032 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8035 */;
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
