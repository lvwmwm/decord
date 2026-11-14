// Module ID: 8194
// Function ID: 8195
// Name: nativePermissionDesktopNullUtils
// Dependencies: [8195, 2]

// Module 8194 (nativePermissionDesktopNullUtils)
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils" /* 8195 */;
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
