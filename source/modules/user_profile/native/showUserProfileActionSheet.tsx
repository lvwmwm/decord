// Module ID: 8297
// Function ID: 66689
// Name: getUserProfileActionSheetKey
// Dependencies: [5, 6637, 3768, 1850, 1935, 3804, 8298, 4099, 8303, 2]
// Exports: getUserProfileBlockedSpeedBumpActionSheetKey, showUserProfileActionSheetPostConnection

// Module 8297 (getUserProfileActionSheetKey)
import explicitContentFromProto from "explicitContentFromProto";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getUserProfileActionSheetKey(userId) {
  return "UserProfile" + userId;
}
function getUserProfileIgnoredSpeedBumpActionSheetKey(userId) {
  return "UserProfileIgnoredSpeedBump" + userId;
}
function showUserProfileActionSheet(isPreviewingChanges, arg1) {
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = require(3804) /* explicitContentFromProto */.IgnoreProfileSpeedbumpDisabled;
  if (!isPreviewingChanges.ignoreBlockedSpeedBump) {
    const isBlockedResult = _isNativeReflectConstruct.isBlocked(isPreviewingChanges.userId);
    const isIgnoredResult = _isNativeReflectConstruct.isIgnored(isPreviewingChanges.userId);
    if (isIgnoredResult) {
      let obj = importDefault(4099);
      obj = {};
      const tmp9 = require(1935) /* maybeLoadBundle */(8298, dependencyMap.paths);
      const merged = Object.assign(isPreviewingChanges);
      let str = "ignore";
      if (isBlockedResult) {
        str = "block";
      }
      obj["speedBumpType"] = str;
      obj["openedAt"] = timestamp;
      obj.openLazy(tmp9, getUserProfileIgnoredSpeedBumpActionSheetKey(isPreviewingChanges.userId), obj);
    }
  }
  const tmp17 = require(1935) /* maybeLoadBundle */(8303, dependencyMap.paths);
  const obj3 = importDefault(4099);
  obj = {};
  const merged1 = Object.assign(isPreviewingChanges);
  obj["openedAt"] = timestamp;
  obj3.openLazy(tmp17, getUserProfileActionSheetKey(isPreviewingChanges.userId), obj, "replaceAll");
}
require("shouldWaitForBlockingModals").addPostConnectionCallback;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

export default showUserProfileActionSheet;
export { getUserProfileActionSheetKey };
export const getUserProfileBlockedSpeedBumpActionSheetKey = function getUserProfileBlockedSpeedBumpActionSheetKey(arg0) {
  return "UserProfileBlockedSpeedBump" + arg0;
};
export { getUserProfileIgnoredSpeedBumpActionSheetKey };
export const showUserProfileActionSheetPostConnection = function showUserProfileActionSheetPostConnection(arg0) {
  let closure_0 = arg0;
  // CreateGeneratorClosureLongIndex (0x67)
  addPostConnectionCallback(callback(tmp));
};
