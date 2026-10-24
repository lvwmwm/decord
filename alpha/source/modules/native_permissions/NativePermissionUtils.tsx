// Module ID: 7885
// Function ID: 7886
// Name: NativePermissionUtils
// Dependencies: [7310, 7886, 7890, 2, 7887]

// Module 7885 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7310 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7886 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7887 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7890 */;
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
