// Module ID: 7675
// Function ID: 7676
// Name: NativePermissionUtils
// Dependencies: [7676, 7677, 7681, 2, 7678]

// Module 7675 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7676 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7677 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7678 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7681 */;
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
