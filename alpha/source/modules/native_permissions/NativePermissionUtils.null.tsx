// Module ID: 7840
// Function ID: 7841
// Name: nativePermissionDesktopNullUtils
// Dependencies: [7841, 2]

// Module 7840 (nativePermissionDesktopNullUtils)
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils" /* 7841 */;
import size from "module_2" /* 2 */;

const NativePermissionBaseUtils = NativePermissionBaseUtils2.NativePermissionBaseUtils;
class NativePermissionDesktopNullUtils extends NativePermissionBaseUtils {
  requestPermissionCore() {
    return Promise.resolve(true);
  }
  hasPermissionCore() {
    return Promise.resolve(true);
  }
  openSettings() {

  }
  didHavePermission() {
    return true;
  }
  openAlertModal() {

  }
}
const prototype = NativePermissionDesktopNullUtils.prototype;
const nativePermissionDesktopNullUtils = new NativePermissionDesktopNullUtils();
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default nativePermissionDesktopNullUtils;
