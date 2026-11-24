// Module ID: 7740
// Function ID: 7741
// Name: NativePermissionUtils
// Dependencies: [7438, 7741, 7745, 2, 7742]

// Module 7740 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7438 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7741 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7742 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7745 */;
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
