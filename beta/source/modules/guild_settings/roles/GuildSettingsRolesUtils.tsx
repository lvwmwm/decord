// Module ID: 17414
// Function ID: 17415
// Name: GuildSettingsRolesUtils
// Dependencies: [19, 2108, 1372, 17405, 1074, 504, 4678, 6550, 5831, 1241, 5829, 1370, 2]
// Exports: filterFullMembersByQuery, filterRole, getSectionAnalyticsName, useGuildMembers, useGuildRoleMembers, useQueryGuildMembers

// Module 17414 (GuildSettingsRolesUtils)
import Constants from "Constants" /* 1074 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import GuildUtilsDefault from "GuildUtils" /* 5831 */;
import GuildRoleMemberActionCreators from "GuildRoleMemberActionCreators" /* 6550 */;
import GuildSettingsConstants from "GuildSettingsConstants" /* 17405 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, roles, user;

let tmp;
const AnalyticsUtilsDefault = tmp(1241);
let react = react_mod;
const constants = GuildSettingsConstants.GuildSettingsRoleEditSections;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export const useGuildMembers = function useGuildMembers(id, callback) {
  let stateFromStoresArray;
  _require = id;
  let closure_1 = callback;
  const items = [GuildMemberStore];
  const items1 = [id, callback];
  const obj = require("get initialized");
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    members = members.getMembers(closure_0);
    let found = members;
    if (null != callback) {
      found = members.filter(tmp);
    }
    return found;
  }, items1);
  const items2 = [UserStore];
  const items3 = [stateFromStoresArray];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => stateFromStoresArray.reduce((acc, userId) => {
    user = user.getUser(userId.userId);
    if (null != user) {
      acc[userId.userId] = user;
    }
    return acc;
  }, {}), items3);
  const items4 = [stateFromStoresArray, stateFromStoresObject, id];
  return stateFromStoresObject.useMemo(() => {
    let obj4;
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = stateFromStoresObject[nextResult.userId];
      let obj = tmp5;
      if (null != tmp5) {
        let nick = tmp3.nick;
        let push = items.push;
        if (nick == null) {
          let obj2 = id2(stateFromStoresArray[6]);
          nick = obj2.getName(obj);
        }
        let obj5 = { name: nick, userTag: obj4.getUserTag(obj), id: tmp3.userId, avatarSource: obj.getAvatarSource(closure_0), avatarURL: obj.getAvatarURL(closure_0, 80), bot: obj.bot, verifiedBot: obj.isVerifiedBot(), roles: null, key: null, user: obj };
        obj4 = id2(stateFromStoresArray[6]);
        ({ roles: obj3.roles, userId: obj3.key } = tmp3);
        let arr = push(obj5);
      }
      continue;
    }
    return items;
  }, items4);
};
export const useGuildRoleMembers = function useGuildRoleMembers(id, id2, onMembersLoadFail) {
  let current;
  let ref;
  let closure_1 = id2;
  dependencyMap = onMembersLoadFail;
  react = react.useRef(onMembersLoadFail);
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  let items = [id, id2];
  const effect1 = react.useEffect(() => {
    const obj = GuildRoleMemberActionCreators;
    const membersForRole = obj.requestMembersForRole(id, id2);
    membersForRole.catch(ref.current);
  }, items);
  const items1 = [id2];
  const callback = react.useCallback((roles) => {
    roles = roles.roles;
    return roles.includes(id2);
  }, items1);
  _require = id;
  let obj = require("get initialized");
  const items2 = [GuildMemberStore];
  const items3 = [id, callback];
  const stateFromStoresArray = obj.useStateFromStoresArray(items2, () => {
    members = members.getMembers(closure_0);
    let found = members;
    if (null != callback) {
      found = members.filter(tmp);
    }
    return found;
  }, items3);
  let obj2 = require("get initialized");
  const items4 = [UserStore];
  const items5 = [stateFromStoresArray];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items4, () => stateFromStoresArray.reduce((acc, userId) => {
    user = user.getUser(userId.userId);
    if (null != user) {
      acc[userId.userId] = user;
    }
    return acc;
  }, {}), items5);
  const items6 = [stateFromStoresArray, stateFromStoresObject, id];
  return react.useMemo(() => {
    let obj4;
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = stateFromStoresObject[nextResult.userId];
      let obj = tmp5;
      if (null != tmp5) {
        let nick = tmp3.nick;
        let push = items.push;
        if (nick == null) {
          let obj2 = id2(stateFromStoresArray[6]);
          nick = obj2.getName(obj);
        }
        let obj5 = { name: nick, userTag: obj4.getUserTag(obj), id: tmp3.userId, avatarSource: obj.getAvatarSource(closure_0), avatarURL: obj.getAvatarURL(closure_0, 80), bot: obj.bot, verifiedBot: obj.isVerifiedBot(), roles: null, key: null, user: obj };
        obj4 = id2(stateFromStoresArray[6]);
        ({ roles: obj3.roles, userId: obj3.key } = tmp3);
        let arr = push(obj5);
      }
      continue;
    }
    return items;
  }, items6);
};
export const useQueryGuildMembers = function useQueryGuildMembers(id, formatted) {
  let closure_0 = id;
  let closure_1 = formatted;
  const ref = react.useRef(false);
  const items = [id, formatted];
  const effect = react.useEffect(() => {
    const obj = GuildUtilsDefault;
    const members = obj.requestMembers(id, formatted, 200);
    let current = "" === formatted;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const tmpResult = AnalyticsUtilsDefault;
      tmpResult.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Role Members" });
      ref.current = true;
    }
  }, items);
};
export const filterFullMembersByQuery = function filterFullMembersByQuery(str, id) {
  str = str.trim();
  const formatted = str.toLowerCase();
  let tmp8Result = id.id === formatted;
  if (!tmp8Result) {
    const str2 = id.name;
    const tmp5 = fuzzysearchDefault;
    tmp8Result = tmp5(formatted, str2.toLowerCase());
  }
  if (!tmp8Result) {
    const str3 = id.userTag;
    const tmp8 = fuzzysearchDefault;
    tmp8Result = tmp8(formatted, str3.toLowerCase());
  }
  return tmp8Result;
};
export const getSectionAnalyticsName = function getSectionAnalyticsName(DISPLAY) {
  if (constants.MEMBERS === DISPLAY) {
    return "Members";
  } else if (constants.PERMISSIONS === DISPLAY) {
    return "Permissions";
  } else if (constants.DISPLAY === DISPLAY) {
    return "Role Settings";
  } else if (constants.VERIFICATIONS === DISPLAY) {
    return "Connections";
  } else {
    const obj = GlobalUtils;
    obj.assertNever(DISPLAY);
  }
};
export const filterRole = function filterRole(name, str) {
  let hasItem = "" === str;
  if (!hasItem) {
    str = name.name;
    const formatted = str.toLowerCase();
    hasItem = formatted.includes(str.toLowerCase());
  }
  return hasItem;
};
