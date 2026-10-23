// Module ID: 7883
// Function ID: 7884
// Name: NativePermissionUtils
// Dependencies: [7308, 7884, 7888, 2, 7885]

// Module 7883 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7308 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7884 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7885 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7888 */;
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
