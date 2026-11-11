// Module ID: 8126
// Function ID: 8127
// Name: NativePermissionUtils
// Dependencies: [8127, 8128, 8132, 2, 8129]

// Module 8126 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 8127 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8128 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8129 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8132 */;
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
