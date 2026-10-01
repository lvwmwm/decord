// Module ID: 7604
// Function ID: 7605
// Name: usePendingAvatarSettings
// Dependencies: [19, 7605, 7608, 563, 7609, 7611, 7612, 2]
// Exports: default

// Module 7604 (usePendingAvatarSettings)
import react from "react" /* 19 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7611 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
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
  const tmp2 = guildId(7608)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  let obj = isTryItOut(563);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      ({ tryItOutAvatar: obj3.pendingAvatar, tryItOutAvatarDecoration: obj3.pendingAvatarDecoration } = tryItOutChanges);
      const obj5 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: UserProfileSettingsStore.getErrors(guildId).avatarDecoration };
      return obj5;
    } else {
      const pendingChanges = obj.getPendingChanges(guildId);
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      const obj6 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: UserProfileSettingsStore.getErrors(guildId).avatarDecoration };
      return obj6;
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
    setTryItOutAvatar = tmp3(7612).setTryItOutAvatar;
  }
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(7612).setTryItOutAvatarDecoration;
  }
  return obj2;
};
