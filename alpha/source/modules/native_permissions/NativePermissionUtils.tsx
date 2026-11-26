// Module ID: 7873
// Function ID: 7874
// Name: NativePermissionUtils
// Dependencies: [7564, 7874, 7878, 2, 7875]

// Module 7873 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7564 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7874 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7875 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7878 */;
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
