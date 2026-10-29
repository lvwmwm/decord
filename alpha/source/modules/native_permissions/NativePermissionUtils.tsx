// Module ID: 7943
// Function ID: 7944
// Name: NativePermissionUtils
// Dependencies: [7370, 7944, 7948, 2, 7945]

// Module 7943 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7370 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7944 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7945 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7948 */;
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
