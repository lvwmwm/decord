// Module ID: 7419
// Function ID: 7420
// Name: useUserCommunicationDisabled
// Dependencies: [2108, 1372, 504, 4456, 2]
// Exports: default, useCurrentUserCommunicationDisabled, userCommunicationDisabled

// Module 7419 (useUserCommunicationDisabled)
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4456 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default function useUserCommunicationDisabled(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildMemberStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    const obj = GuildMemberStore;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = obj.getMember(tmp2, tmp);
      }
    }
    return member;
  }, items1);
  let prop;
  const tmp = _require;
  if (stateFromStores != null) {
    prop = stateFromStores.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items2 = [prop, ];
  const tmpResult = tmp(4456);
  items2[1] = tmpResult.isMemberCommunicationDisabled(stateFromStores);
  return items2;
};
export const useCurrentUserCommunicationDisabled = function useCurrentUserCommunicationDisabled(guild_id) {
  let currentUser;
  let id;
  const tmp = id;
  const tmp2 = dependencyMap;
  let obj = id(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  dependencyMap = guild_id;
  const items1 = [GuildMemberStore];
  const items2 = [guild_id, id];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let member = null;
    const obj = GuildMemberStore;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = obj.getMember(tmp2, tmp);
      }
    }
    return member;
  }, items2);
  let prop;
  if (stateFromStores1 != null) {
    prop = stateFromStores1.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items3 = [prop, ];
  const tmpResult2 = tmp(4456);
  items3[1] = tmpResult2.isMemberCommunicationDisabled(stateFromStores1);
  return items3;
};
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  let member = null;
  const obj = GuildMemberStore;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = obj.getMember(guildId, id);
    }
  }
  let prop;
  if (member != null) {
    prop = member.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items = [prop, ];
  const obj2 = CommunicationDisabledUtils;
  items[1] = obj2.isMemberCommunicationDisabled(member);
  return items;
};
