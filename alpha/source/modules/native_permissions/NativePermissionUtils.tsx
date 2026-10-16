// Module ID: 7720
// Function ID: 7721
// Name: NativePermissionUtils
// Dependencies: [7134, 7721, 7725, 2, 7722]

// Module 7720 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7134 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7721 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7722 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7725 */;
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
