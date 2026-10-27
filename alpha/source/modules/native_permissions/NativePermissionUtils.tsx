// Module ID: 7886
// Function ID: 7887
// Name: NativePermissionUtils
// Dependencies: [7312, 7887, 7891, 2, 7888]

// Module 7886 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7312 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7887 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7888 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7891 */;
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
