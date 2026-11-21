// Module ID: 8907
// Function ID: 8908
// Name: usePendingAvatarSettings
// Dependencies: [19, 8132, 8908, 563, 8909, 8131, 8910, 2]
// Exports: default

// Module 8907 (usePendingAvatarSettings)
import react from "react" /* 19 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8131 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8909 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8132 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const useCallback = react.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  let closure_2;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingErrors;
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp2 = guildId(8908)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  let obj = isTryItOut(563);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tryItOutAvatarDecoration;
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    const obj3 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      ({ tryItOutAvatar: obj2.pendingAvatar, tryItOutAvatarDecoration } = tryItOutChanges);
      if (tryItOutAvatarDecoration == null) {
        tryItOutAvatarDecoration = pendingChanges.pendingAvatarDecoration;
      }
      obj3.pendingAvatarDecoration = tryItOutAvatarDecoration;
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    } else {
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    }
  });
  const items1 = [guildId];
  ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
  let setTryItOutAvatar = useCallback((avatar) => {
    const obj = UserProfileSettingsActionCreators;
    const obj2 = { guildId, avatar };
    obj.setPendingChanges(obj2);
    let str = "set";
    const announcePendingAvatarChange = ProfileCustomizationUtils.announcePendingAvatarChange;
    ProfileCustomizationUtils;
    if (null == avatar) {
      str = "remove";
    }
    const result = announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp2, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    const obj = UserProfileSettingsActionCreators;
    const obj2 = { guildId, avatarDecoration };
    obj.setPendingChanges(obj2);
    if (null != avatarDecoration) {
      closure_2(avatarDecoration);
    }
  }, items2);
  let obj2 = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: setTryItOutAvatar, setPendingAvatarDecoration: setTryItOutAvatarDecoration };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8910).setTryItOutAvatar;
  }
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8910).setTryItOutAvatarDecoration;
  }
  return obj2;
};
