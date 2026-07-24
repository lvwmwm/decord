// Module ID: 12170
// Function ID: 95338
// Name: useCanDM
// Dependencies: [6900, 3759, 1194, 1917, 3767, 3803, 566, 2]
// Exports: canDm, default

// Module 12170 (useCanDM)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default function useCanDM(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [closure_4];
  let _isNativeReflectConstruct = _require(566).useStateFromStores(items, () => id.getId() === closure_0);
  const obj = _require(566);
  const items1 = [closure_3];
  closure_3 = _require(566).useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_1;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(closure_1);
    }
    return isLurkingResult;
  });
  const RestrictedGuildIds = _require(3803).RestrictedGuildIds;
  closure_4 = RestrictedGuildIds.useSetting();
  const obj2 = _require(566);
  const items2 = [closure_6, closure_5, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items2, () => {
    let tmp = !gameFriendsForUser;
    if (tmp) {
      tmp = !closure_3;
    }
    if (tmp) {
      let isFriendResult = outer1_6.isFriend(callback);
      if (!isFriendResult) {
        isFriendResult = null != outer1_5.memberOf(callback).find((arg0) => !outer1_4.includes(arg0));
        const memberOfResult = outer1_5.memberOf(callback);
      }
      tmp = isFriendResult;
    }
    if (!tmp) {
      let setting = gameFriendsForUser.getGameFriendsForUser(callback).length > 0;
      if (setting) {
        const AllowGameFriendDmsInDiscord = callback(table[5]).AllowGameFriendDmsInDiscord;
        setting = AllowGameFriendDmsInDiscord.getSetting();
      }
      tmp = setting;
    }
    return tmp;
  });
};
export const canDm = function canDm(arg0, arg1) {
  const tmp = id.getId() === arg0;
  let isLurkingResult = null != arg1;
  if (isLurkingResult) {
    isLurkingResult = lurking.isLurking(arg1);
  }
  const RestrictedGuildIds = _require(3803).RestrictedGuildIds;
  _require = RestrictedGuildIds.getSetting();
  let isFriendResult = friend.isFriend(arg0);
  let tmp5 = !tmp;
  if (!tmp) {
    tmp5 = !isLurkingResult;
  }
  if (tmp5) {
    if (!isFriendResult) {
      isFriendResult = null != closure_5.memberOf(arg0).find((arg0) => !closure_0.includes(arg0));
      const memberOfResult = closure_5.memberOf(arg0);
    }
    tmp5 = isFriendResult;
  }
  if (!tmp5) {
    let setting = gameFriendsForUser.getGameFriendsForUser(arg0).length > 0;
    if (setting) {
      const AllowGameFriendDmsInDiscord = _require(3803).AllowGameFriendDmsInDiscord;
      setting = AllowGameFriendDmsInDiscord.getSetting();
    }
    tmp5 = setting;
  }
  return tmp5;
};
