// Module ID: 12018
// Function ID: 92886
// Name: useCanDM
// Dependencies: []
// Exports: canDm, default

// Module 12018 (useCanDM)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default function useCanDM(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_4];
  let closure_2 = arg1(dependencyMap[6]).useStateFromStores(items, () => id.getId() === arg0);
  const obj = arg1(dependencyMap[6]);
  const items1 = [closure_3];
  closure_3 = arg1(dependencyMap[6]).useStateFromStores(items1, () => {
    let isLurkingResult = null != arg1;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(arg1);
    }
    return isLurkingResult;
  });
  const RestrictedGuildIds = arg1(dependencyMap[5]).RestrictedGuildIds;
  closure_4 = RestrictedGuildIds.useSetting();
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_6, closure_5, closure_2];
  return arg1(dependencyMap[6]).useStateFromStores(items2, () => {
    let tmp = !gameFriendsForUser;
    if (tmp) {
      tmp = !closure_3;
    }
    if (tmp) {
      let isFriendResult = friend.isFriend(arg0);
      if (!isFriendResult) {
        isFriendResult = null != closure_5.memberOf(arg0).find((arg0) => !closure_4.includes(arg0));
        const memberOfResult = closure_5.memberOf(arg0);
      }
      tmp = isFriendResult;
    }
    if (!tmp) {
      let setting = gameFriendsForUser.getGameFriendsForUser(arg0).length > 0;
      if (setting) {
        const AllowGameFriendDmsInDiscord = arg0(arg1[5]).AllowGameFriendDmsInDiscord;
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
  const RestrictedGuildIds = callback(dependencyMap[5]).RestrictedGuildIds;
  const callback = RestrictedGuildIds.getSetting();
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
      const AllowGameFriendDmsInDiscord = callback(dependencyMap[5]).AllowGameFriendDmsInDiscord;
      setting = AllowGameFriendDmsInDiscord.getSetting();
    }
    tmp5 = setting;
  }
  return tmp5;
};
