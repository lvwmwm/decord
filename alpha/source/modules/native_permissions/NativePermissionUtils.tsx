// Module ID: 7861
// Function ID: 7862
// Name: NativePermissionUtils
// Dependencies: [7287, 7862, 7866, 2, 7863]

// Module 7861 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7287 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7862 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7863 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7866 */;
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
