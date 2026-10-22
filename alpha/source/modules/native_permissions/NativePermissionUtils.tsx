// Module ID: 7869
// Function ID: 7870
// Name: NativePermissionUtils
// Dependencies: [7294, 7870, 7874, 2, 7871]

// Module 7869 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7294 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7870 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7871 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7874 */;
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
