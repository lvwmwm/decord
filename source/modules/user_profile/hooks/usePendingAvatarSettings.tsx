// Module ID: 7840
// Function ID: 62481
// Name: usePendingAvatarSettings
// Dependencies: [31, 7841, 7843, 624, 7844, 7846, 7847, 2]
// Exports: default

// Module 7840 (usePendingAvatarSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

require("result").useCallback;
let result = require("useTrackCollectiblesItemTryOut").fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingErrors;
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp = guildId(7843)(isTryItOut.analyticsLocations);
  const dependencyMap = tmp;
  let obj = isTryItOut(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = outer1_4;
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      obj = {};
      ({ tryItOutAvatar: obj3.pendingAvatar, tryItOutAvatarDecoration: obj3.pendingAvatarDecoration } = tryItOutChanges);
      obj.pendingErrors = obj.getErrors(guildId).avatarDecoration;
      return obj;
    } else {
      const pendingChanges = obj.getPendingChanges(guildId);
      obj = {};
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      obj.pendingErrors = obj.getErrors(guildId).avatarDecoration;
      return obj;
    }
  });
  const items1 = [guildId];
  ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
  let setTryItOutAvatar = useCallback((avatar) => {
    let obj = isTryItOut(tmp[4]);
    obj = { guildId, avatar };
    obj.setPendingChanges(obj);
    let str = "set";
    if (null == avatar) {
      str = "remove";
    }
    const result = isTryItOut(tmp[5]).announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    let obj = isTryItOut(tmp[4]);
    obj = { guildId, avatarDecoration };
    obj.setPendingChanges(obj);
    if (null != avatarDecoration) {
      tmp(avatarDecoration);
    }
  }, items2);
  obj = { pendingAvatar, pendingAvatarDecoration, pendingErrors };
  if (isTryItOut) {
    setTryItOutAvatar = isTryItOut(7847).setTryItOutAvatar;
  }
  obj.setPendingAvatar = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = isTryItOut(7847).setTryItOutAvatarDecoration;
  }
  obj.setPendingAvatarDecoration = setTryItOutAvatarDecoration;
  return obj;
};
