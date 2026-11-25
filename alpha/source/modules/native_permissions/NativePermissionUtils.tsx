// Module ID: 7839
// Function ID: 7840
// Name: NativePermissionUtils
// Dependencies: [7533, 7840, 7844, 2, 7841]

// Module 7839 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7533 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7840 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7841 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7844 */;
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
