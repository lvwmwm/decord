// Module ID: 7676
// Function ID: 7677
// Name: NativePermissionUtils
// Dependencies: [7677, 7678, 7682, 2, 7679]

// Module 7676 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7677 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7678 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7679 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7682 */;
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
