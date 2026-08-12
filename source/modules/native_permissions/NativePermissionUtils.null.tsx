// Module ID: 4904
// Function ID: 4905
// Name: requestPermissionCore
// Dependencies: [4905, 2]

// Module 4904 (requestPermissionCore)
import { NativePermissionBaseUtils } from "requestAuthorization";

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
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default nativePermissionDesktopNullUtils;
