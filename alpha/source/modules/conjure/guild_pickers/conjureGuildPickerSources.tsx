// Module ID: 12459
// Function ID: 12460
// Name: conjureGuildPickerSources
// Dependencies: [19, 4921, 4915, 1384, 504, 1380, 5063, 6895, 6896, 2]
// Exports: conjureMemberUsername, useConjureGuildMemberUsers, useConjureGuildRoles, useConjureMemberRequests

// Module 12459 (conjureGuildPickerSources)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import UserUtils from "UserUtils" /* 5063 */;
import GuildUtilsDefault from "GuildUtils" /* 6895 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import UserStore from "UserStore" /* 1384 */;
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
export function useConjureMemberRequests(conjureSettingsGuildId, result) {
  let member;
  let closure_0 = conjureSettingsGuildId;
  let items = result;
  if (result === undefined) {
    items = [];
  }
  const items1 = [conjureSettingsGuildId];
  const effect = react.useEffect(() => {
    if (null != conjureSettingsGuildId) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(tmp, "", 25);
    }
  }, items1);
  const joined = items.join(",");
  const items2 = [conjureSettingsGuildId, joined];
  const effect1 = react.useEffect(() => {
    if (null != conjureSettingsGuildId) {
      const str = joined;
      if ("" !== joined) {
        const parts = str.split(",");
        const found = parts.filter((item) => !member.isMember(conjureSettingsGuildId, item));
        if (found.length > 0) {
          const obj = GuildActionCreatorsDefault;
          const membersById = obj.requestMembersById(tmp, found);
        }
      }
    }
  }, items2);
  const items3 = [conjureSettingsGuildId];
  return react.useCallback((str) => {
    const trimmed = str.trim();
    let tmp3 = null != conjureSettingsGuildId;
    const tmp2 = conjureSettingsGuildId;
    if (tmp3) {
      tmp3 = "" !== trimmed;
    }
    if (tmp3) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(tmp2, trimmed, 25);
    }
  }, items3);
}
