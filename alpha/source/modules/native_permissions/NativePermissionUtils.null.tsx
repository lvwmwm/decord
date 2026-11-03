// Module ID: 8082
// Function ID: 8083
// Name: nativePermissionDesktopNullUtils
// Dependencies: [8083, 2]

// Module 8082 (nativePermissionDesktopNullUtils)
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils" /* 8083 */;
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
