// Module ID: 8081
// Function ID: 8082
// Name: NativePermissionUtils
// Dependencies: [7503, 8082, 8086, 2, 8083]

// Module 8081 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7503 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8082 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8083 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8086 */;
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
