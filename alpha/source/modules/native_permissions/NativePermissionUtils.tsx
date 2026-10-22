// Module ID: 7870
// Function ID: 7871
// Name: NativePermissionUtils
// Dependencies: [7295, 7871, 7875, 2, 7872]

// Module 7870 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7295 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7871 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7872 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7875 */;
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
