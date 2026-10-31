// Module ID: 7957
// Function ID: 7958
// Name: NativePermissionUtils
// Dependencies: [7383, 7958, 7962, 2, 7959]

// Module 7957 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7383 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7958 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7959 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7962 */;
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
