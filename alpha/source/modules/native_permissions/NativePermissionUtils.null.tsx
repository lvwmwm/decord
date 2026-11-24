// Module ID: 7741
// Function ID: 7742
// Name: nativePermissionDesktopNullUtils
// Dependencies: [7742, 2]

// Module 7741 (nativePermissionDesktopNullUtils)
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils" /* 7742 */;
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
