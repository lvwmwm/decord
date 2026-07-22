// Module ID: 8486
// Function ID: 67767
// Name: getUserProfileActionSheetKey
// Dependencies: []
// Exports: getUserProfileBlockedSpeedBumpActionSheetKey, showUserProfileActionSheetPostConnection

// Module 8486 (getUserProfileActionSheetKey)
function getUserProfileActionSheetKey(userId) {
  return "UserProfile" + userId;
}
function getUserProfileIgnoredSpeedBumpActionSheetKey(userId) {
  return "UserProfileIgnoredSpeedBump" + userId;
}
function showUserProfileActionSheet(ignoreBlockedSpeedBump) {
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = arg1(dependencyMap[5]).IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = closure_5.isBlocked(ignoreBlockedSpeedBump.userId);
    const isIgnoredResult = closure_5.isIgnored(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      let obj = importDefault(dependencyMap[7]);
      obj = {};
      const tmp9 = arg1(dependencyMap[4])(dependencyMap[6], dependencyMap.paths);
      const merged = Object.assign(ignoreBlockedSpeedBump);
      let str = "ignore";
      if (isBlockedResult) {
        str = "block";
      }
      obj["speedBumpType"] = str;
      obj["openedAt"] = timestamp;
      obj.openLazy(tmp9, getUserProfileIgnoredSpeedBumpActionSheetKey(ignoreBlockedSpeedBump.userId), obj);
    }
  }
  const tmp17 = arg1(dependencyMap[4])(dependencyMap[8], dependencyMap.paths);
  const obj3 = importDefault(dependencyMap[7]);
  obj = {};
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  obj["openedAt"] = timestamp;
  obj3.openLazy(tmp17, getUserProfileActionSheetKey(ignoreBlockedSpeedBump.userId), obj, "replaceAll");
}
let closure_3 = importDefault(dependencyMap[0]);
arg1(dependencyMap[1]).addPostConnectionCallback;
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

export default showUserProfileActionSheet;
export { getUserProfileActionSheetKey };
export const getUserProfileBlockedSpeedBumpActionSheetKey = function getUserProfileBlockedSpeedBumpActionSheetKey(arg0) {
  return "UserProfileBlockedSpeedBump" + arg0;
};
export { getUserProfileIgnoredSpeedBumpActionSheetKey };
export const showUserProfileActionSheetPostConnection = function showUserProfileActionSheetPostConnection(arg0) {
  const arg1 = arg0;
  // CreateGeneratorClosureLongIndex (0x67)
  addPostConnectionCallback(callback(tmp));
};
