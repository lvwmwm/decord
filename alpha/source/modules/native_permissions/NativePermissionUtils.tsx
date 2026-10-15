// Module ID: 7716
// Function ID: 7717
// Name: NativePermissionUtils
// Dependencies: [7130, 7717, 7721, 2, 7718]

// Module 7716 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7130 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7717 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7718 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7721 */;
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
