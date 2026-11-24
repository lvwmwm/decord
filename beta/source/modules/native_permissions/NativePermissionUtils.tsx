// Module ID: 7795
// Function ID: 7796
// Name: NativePermissionUtils
// Dependencies: [7796, 7797, 7801, 2, 7798]

// Module 7795 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7796 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7797 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7798 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7801 */;
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
