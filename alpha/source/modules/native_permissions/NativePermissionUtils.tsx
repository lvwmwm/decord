// Module ID: 7949
// Function ID: 7950
// Name: NativePermissionUtils
// Dependencies: [7377, 7950, 7954, 2, 7951]

// Module 7949 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7377 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7950 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7951 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7954 */;
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
