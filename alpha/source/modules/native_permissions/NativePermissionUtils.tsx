// Module ID: 8048
// Function ID: 8049
// Name: NativePermissionUtils
// Dependencies: [7466, 8049, 8053, 2, 8050]

// Module 8048 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7466 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 8049 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8050 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8053 */;
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
