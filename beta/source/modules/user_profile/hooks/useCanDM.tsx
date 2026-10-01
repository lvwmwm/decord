// Module ID: 12551
// Function ID: 12552
// Name: useCanDM
// Dependencies: [7071, 4470, 502, 2108, 4479, 2021, 504, 2]
// Exports: canDm, default

// Module 12551 (useCanDM)
import UserSettings from "UserSettings" /* 2021 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7071 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_3, closure_4, dependencyMap;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default function useCanDM(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [closure_4];
  const obj = require("get initialized");
  let closure_2 = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
  const items1 = [closure_3];
  const obj2 = require("get initialized");
  closure_3 = obj2.useStateFromStores(items1, () => {
    const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  });
  const RestrictedGuildIds = require("UserSettings").RestrictedGuildIds;
  closure_4 = RestrictedGuildIds.useSetting();
  const items2 = [RelationshipStore, GuildMemberStore, closure_2];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items2, () => {
    let tmp = !closure_2 && !closure_3;
    if (tmp) {
      let isFriendResult = RelationshipStore.isFriend(closure_0);
      const tmp4 = closure_0;
      if (!isFriendResult) {
        const memberOfResult = GuildMemberStore.memberOf(tmp4);
        isFriendResult = null != memberOfResult.find((item) => !closure_1_4.includes(item));
      }
      tmp = isFriendResult;
    }
    if (!tmp) {
      let setting = GameRelationshipStore.getGameFriendsForUser(closure_0).length > 0;
      if (setting) {
        const AllowGameFriendDmsInDiscord = UserSettings.AllowGameFriendDmsInDiscord;
        setting = AllowGameFriendDmsInDiscord.getSetting();
      }
      tmp = setting;
    }
    return tmp;
  });
};
export const canDm = function canDm(userId, guildId) {
  let isLurkingResult = null != guildId;
  const id = AuthenticationStore.getId();
  if (isLurkingResult) {
    isLurkingResult = LurkingStore.isLurking(guildId);
  }
  const tmp4 = id === userId;
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting2 = RestrictedGuildIds.getSetting();
  let isFriendResult = RelationshipStore.isFriend(userId);
  let tmp8 = !tmp4 && !isLurkingResult;
  if (tmp8) {
    if (!isFriendResult) {
      const memberOfResult = GuildMemberStore.memberOf(userId);
      isFriendResult = null != memberOfResult.find((item) => !closure_0.includes(item));
    }
    tmp8 = isFriendResult;
  }
  if (!tmp8) {
    let setting = GameRelationshipStore.getGameFriendsForUser(userId).length > 0;
    if (setting) {
      const AllowGameFriendDmsInDiscord = UserSettings.AllowGameFriendDmsInDiscord;
      setting = AllowGameFriendDmsInDiscord.getSetting();
    }
    tmp8 = setting;
  }
  return tmp8;
};
