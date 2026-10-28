// Module ID: 7920
// Function ID: 7921
// Name: NativePermissionUtils
// Dependencies: [7346, 7921, 7925, 2, 7922]

// Module 7920 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7346 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7921 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7922 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7925 */;
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
