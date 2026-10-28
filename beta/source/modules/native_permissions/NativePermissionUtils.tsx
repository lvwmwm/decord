// Module ID: 7917
// Function ID: 7918
// Name: NativePermissionUtils
// Dependencies: [7342, 7918, 7922, 2, 7919]

// Module 7917 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7342 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7918 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7919 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7922 */;
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
