// Module ID: 7766
// Function ID: 7767
// Name: NativePermissionUtils
// Dependencies: [7187, 7767, 7771, 2, 7768]

// Module 7766 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7187 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7767 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7768 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7771 */;
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
