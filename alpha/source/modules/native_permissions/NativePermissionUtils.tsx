// Module ID: 7288
// Function ID: 7289
// Name: NativePermissionUtils
// Dependencies: [7289, 6721, 7290, 7294, 2, 7291]

// Module 7288 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6721 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7290 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7291 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7294 */;
import NativePermissionManager_mod from "NativePermissionManager" /* 7289 */;
import size from "module_2" /* 2 */;

let _default;
let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  _default = nativePermissionDesktopNullUtils.default;
} else {
  _default = mobile_NativePermissionUtils.default;
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = NativePermissionBaseUtils.NativePermissionsRequestOptions;
