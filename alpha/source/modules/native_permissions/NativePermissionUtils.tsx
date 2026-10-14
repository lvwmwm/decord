// Module ID: 7506
// Function ID: 7507
// Name: NativePermissionUtils
// Dependencies: [6916, 7507, 7511, 2, 7508]

// Module 7506 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6916 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7507 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7508 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7511 */;
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
