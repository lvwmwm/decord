// Module ID: 18460
// Function ID: 18461
// Name: conjureGuildPickerSources
// Dependencies: [19, 4924, 4918, 1386, 504, 1254, 5068, 6959, 6960, 2]
// Exports: conjureMemberUsername, useConjureGuildMemberUsers, useConjureGuildRoles, useConjureMemberRequests

// Module 18460 (conjureGuildPickerSources)
import GlobalUtils from "GlobalUtils" /* 1254 */;
import UserUtils from "UserUtils" /* 5068 */;
import GuildUtilsDefault from "GuildUtils" /* 6959 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6960 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4924 */;
import GuildRoleStore from "GuildRoleStore" /* 4918 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/guild_pickers/conjureGuildPickerSources.tsx");

export function useConjureGuildRoles(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildRoleStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let sortedRoles;
    if (null != closure_0) {
      sortedRoles = GuildRoleStore.getSortedRoles(tmp);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  }, items1);
}
export function useConjureGuildMemberUsers(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildMemberStore, UserStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let found;
    let user;
    if (null != closure_0) {
      const memberIds = GuildMemberStore.getMemberIds(tmp);
      const mapped = memberIds.map((item) => user.getUser(item));
      found = mapped.filter(GlobalUtils.isNotNullish);
    } else {
      found = [];
    }
    return found;
  }, items1);
}
export function conjureMemberUsername(id, arg1) {
  let identifiable = "always";
  const getUserTag = UserUtils.getUserTag;
  UserUtils;
  if (arg1) {
    identifiable = "never";
  }
  return getUserTag(id, { identifiable });
}
export function useConjureMemberRequests(guildId, result) {
  let member;
  let closure_0 = guildId;
  let items = result;
  if (result === undefined) {
    items = [];
  }
  const items1 = [guildId];
  const effect = react.useEffect(() => {
    if (null != guildId) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(tmp, "", 25);
    }
  }, items1);
  const joined = items.join(",");
  const items2 = [guildId, joined];
  const effect1 = react.useEffect(() => {
    if (null != guildId) {
      const str = joined;
      if ("" !== joined) {
        const parts = str.split(",");
        const found = parts.filter((item) => !member.isMember(guildId, item));
        if (found.length > 0) {
          const obj = GuildActionCreatorsDefault;
          const membersById = obj.requestMembersById(tmp, found);
        }
      }
    }
  }, items2);
  const items3 = [guildId];
  return react.useCallback((str) => {
    const trimmed = str.trim();
    let tmp3 = null != guildId;
    const tmp2 = guildId;
    if (tmp3) {
      tmp3 = "" !== trimmed;
    }
    if (tmp3) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(tmp2, trimmed, 25);
    }
  }, items3);
}
