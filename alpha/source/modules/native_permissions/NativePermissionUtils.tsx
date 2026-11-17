// Module ID: 8203
// Function ID: 8204
// Name: NativePermissionUtils
// Dependencies: [8204, 8205, 8209, 2, 8206]

// Module 8203 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 8204 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8205 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8206 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8209 */;
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
