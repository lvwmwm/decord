// Module ID: 7833
// Function ID: 7834
// Name: NativePermissionUtils
// Dependencies: [7259, 7834, 7838, 2, 7835]

// Module 7833 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7259 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7834 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7835 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7838 */;
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
