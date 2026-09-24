// Module ID: 5392
// Function ID: 5393
// Name: requestPermissionCore
// Dependencies: [5393, 2]

// Module 5392 (requestPermissionCore)
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils" /* 5393 */;
import size from "module_2" /* 2 */;

const NativePermissionBaseUtils = NativePermissionBaseUtils2.NativePermissionBaseUtils;
class NativePermissionDesktopNullUtils extends NativePermissionBaseUtils {
}
const prototype = NativePermissionDesktopNullUtils.prototype;
prototype["requestPermissionCore"] = function requestPermissionCore() {
  return Promise.resolve(true);
};
prototype["hasPermissionCore"] = function hasPermissionCore() {
  return Promise.resolve(true);
};
prototype["openSettings"] = function openSettings() {

};
prototype["didHavePermission"] = function didHavePermission() {
  return true;
};
prototype["openAlertModal"] = function openAlertModal() {

};
const nativePermissionDesktopNullUtils = new NativePermissionDesktopNullUtils();
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default nativePermissionDesktopNullUtils;
