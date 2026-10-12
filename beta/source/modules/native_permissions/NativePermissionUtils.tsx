// Module ID: 7500
// Function ID: 7501
// Name: NativePermissionUtils
// Dependencies: [6911, 7501, 7505, 2, 7502]

// Module 7500 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6911 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7501 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7502 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7505 */;
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
