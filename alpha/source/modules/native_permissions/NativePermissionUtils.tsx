// Module ID: 8102
// Function ID: 8103
// Name: NativePermissionUtils
// Dependencies: [7521, 8103, 8107, 2, 8104]

// Module 8102 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7521 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8103 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8104 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8107 */;
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
