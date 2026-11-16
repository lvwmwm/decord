// Module ID: 8192
// Function ID: 8193
// Name: NativePermissionUtils
// Dependencies: [8193, 8194, 8198, 2, 8195]

// Module 8192 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 8193 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8194 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8195 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8198 */;
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
