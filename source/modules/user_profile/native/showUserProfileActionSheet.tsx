// Module ID: 8492
// Function ID: 67804
// Name: getUserProfileActionSheetKey
// Dependencies: [5, 7461, 3767, 1849, 1934, 3803, 8493, 4098, 8498, 2]
// Exports: getUserProfileBlockedSpeedBumpActionSheetKey, showUserProfileActionSheetPostConnection

// Module 8492 (getUserProfileActionSheetKey)
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
  const IgnoreProfileSpeedbumpDisabled = require(3803) /* explicitContentFromProto */.IgnoreProfileSpeedbumpDisabled;
  if (!isPreviewingChanges.ignoreBlockedSpeedBump) {
    const isBlockedResult = _isNativeReflectConstruct.isBlocked(isPreviewingChanges.userId);
    const isIgnoredResult = _isNativeReflectConstruct.isIgnored(isPreviewingChanges.userId);
    if (isIgnoredResult) {
      let obj = importDefault(4098);
      obj = {};
      const tmp9 = require(1934) /* maybeLoadBundle */(8493, dependencyMap.paths);
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
  const tmp17 = require(1934) /* maybeLoadBundle */(8498, dependencyMap.paths);
  const obj3 = importDefault(4098);
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
