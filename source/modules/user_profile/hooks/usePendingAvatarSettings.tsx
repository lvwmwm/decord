// Module ID: 7833
// Function ID: 62421
// Name: usePendingAvatarSettings
// Dependencies: []
// Exports: default

// Module 7833 (usePendingAvatarSettings)
require(dependencyMap[0]).useCallback;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingErrors;
  isTryItOut = isTryItOut.isTryItOut;
  const require = isTryItOut;
  const guildId = isTryItOut.guildId;
  const importDefault = guildId;
  const tmp = importDefault(dependencyMap[2])(isTryItOut.analyticsLocations);
  const dependencyMap = tmp;
  let obj = require(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = closure_4;
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
    setTryItOutAvatar = require(dependencyMap[6]).setTryItOutAvatar;
  }
  obj.setPendingAvatar = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = require(dependencyMap[6]).setTryItOutAvatarDecoration;
  }
  obj.setPendingAvatarDecoration = setTryItOutAvatarDecoration;
  return obj;
};
