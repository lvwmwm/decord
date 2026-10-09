// Module ID: 18278
// Function ID: 18279
// Name: GuildSettingsRolesUtils
// Dependencies: [19, 2124, 1390, 18269, 1085, 558, 576, 504, 4923, 6815, 6103, 1265, 6101, 1388, 2]
// Exports: filterFullMembersByQuery, filterRole, getSectionAnalyticsName

// Module 18278 (GuildSettingsRolesUtils)
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import fuzzysearchDefault from "fuzzysearch" /* 6101 */;
import GuildUtilsDefault from "GuildUtils" /* 6103 */;
import GuildRoleMemberActionCreators from "GuildRoleMemberActionCreators" /* 6815 */;
import GuildSettingsConstants from "GuildSettingsConstants" /* 18269 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, user;

let tmp;
const AnalyticsUtilsDefault = tmp(1265);
let react = react_mod;
const constants = GuildSettingsConstants.GuildSettingsRoleEditSections;
const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildMembers(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let obj7;
  let stateFromStoresArray;
  _require = arg0;
  importDefault = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp7;
    let tmp8;
    let tmp11;
    let tmp14;
    let tmp13;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(stateFromStoresArray[7]);
    stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserStore];
      cResult[5] = items1;
      tmp11 = items1;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== stateFromStoresArray) {
      const fn2 = function b() {
        return stateFromStoresArray.reduce((acc, userId) => {
          user = user.getUser(userId.userId);
          if (null != user) {
            acc[userId.userId] = user;
          }
          return acc;
        }, {});
      };
      const items2 = [stateFromStoresArray];
      cResult[6] = stateFromStoresArray;
      cResult[7] = fn2;
      cResult[8] = items2;
      tmp14 = items2;
      tmp13 = fn2;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
    }
    const tmpResult2 = tmp(stateFromStoresArray[7]);
    const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp11, tmp13, tmp14);
    if (cResult[9] === arg0) {
      if (cResult[10] === stateFromStoresObject) {
        let tmp17;
        if (cResult[11] === stateFromStoresArray) {
          tmp17 = cResult[12];
        }
        return tmp17;
      }
    }
    const items3 = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp23 = nextResult;
      let tmp24 = stateFromStoresObject[nextResult.userId];
      let obj4 = tmp24;
      if (null != tmp24) {
        let nick = tmp23.nick;
        let push = items3.push;
        if (nick == null) {
          let obj5 = require("UserUtils");
          nick = obj5.getName(obj4);
        }
        let obj2 = { name: nick, userTag: obj7.getUserTag(obj4), id: tmp23.userId, avatarSource: obj4.getAvatarSource(arg0), avatarURL: obj4.getAvatarURL(arg0, 80), bot: obj4.bot, verifiedBot: obj4.isVerifiedBot(), roles: null, key: null, user: obj4 };
        obj7 = require("UserUtils");
        ({ roles: obj6.roles, userId: obj6.key } = tmp23);
        let arr = push(obj2);
      }
      continue;
    }
    cResult[9] = arg0;
    cResult[10] = stateFromStoresObject;
    cResult[11] = stateFromStoresArray;
    cResult[12] = items3;
    tmp17 = items3;
  }
  const fn = function l() {
    const members = GuildMemberStore.getMembers(closure_0);
    let found = members;
    if (null != closure_1) {
      found = members.filter(tmp);
    }
    return found;
  };
  const items4 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp8 = items4;
  tmp7 = fn;
}) : (function useGuildMembers(arg0, arg1) {
  let closure_0;
  let stateFromStoresArray;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [GuildMemberStore];
  const items1 = [arg0, arg1];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const members = GuildMemberStore.getMembers(closure_0);
    let found = members;
    if (null != closure_1) {
      found = members.filter(tmp);
    }
    return found;
  }, items1);
  let obj2 = require("get initialized");
  const items2 = [UserStore];
  const items3 = [stateFromStoresArray];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => stateFromStoresArray.reduce((acc, userId) => {
    user = user.getUser(userId.userId);
    if (null != user) {
      acc[userId.userId] = user;
    }
    return acc;
  }, {}), items3);
  const items4 = [stateFromStoresArray, stateFromStoresObject, arg0];
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
          let obj2 = UserUtilsDefault;
          nick = obj2.getName(obj);
        }
        let obj5 = { name: nick, userTag: obj4.getUserTag(obj), id: tmp3.userId, avatarSource: obj.getAvatarSource(closure_0), avatarURL: obj.getAvatarURL(closure_0, 80), bot: obj.bot, verifiedBot: obj.isVerifiedBot(), roles: null, key: null, user: obj };
        obj4 = UserUtilsDefault;
        ({ roles: obj3.roles, userId: obj3.key } = tmp3);
        let arr = push(obj5);
      }
      continue;
    }
    return items;
  }, items4);
});
let closure_8 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildRoleMembers(arg0, arg1, cResult) {
  let closure_0;
  let current;
  let ref;
  let tmp2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = cResult;
  let obj = require("react");
  cResult = obj.c(8);
  react = react.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function n() {
      ref.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const effect = obj2.useEffect(tmp2);
  if (cResult[2] === arg0) {
    let tmp4;
    let tmp5;
    let tmp7;
    if (cResult[3] === arg1) {
      tmp4 = cResult[4];
      tmp5 = cResult[5];
    }
    const effect1 = obj2.useEffect(tmp4, tmp5);
    if (cResult[6] !== arg1) {
      class R {
        constructor(roles) {
          roles = roles.roles;
          return roles.includes(closure_1);
        }
      }
      cResult[6] = arg1;
      cResult[7] = R;
      tmp7 = R;
    } else {
      class R {
        constructor(roles) {
          roles = roles.roles;
          return roles.includes(closure_1);
        }
      }
    }
    return closure_8(arg0, tmp7);
  }
  const fn2 = function c() {
    const obj = GuildRoleMemberActionCreators;
    const membersForRole = obj.requestMembersForRole(closure_0, closure_1);
    membersForRole.catch(ref.current);
  };
  const items = [arg0, arg1];
  cResult[2] = arg0;
  cResult[3] = arg1;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp5 = items;
  tmp4 = fn2;
}) : (function useGuildRoleMembers(arg0, arg1, cResult) {
  let ref;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const current = cResult;
  react = react.useRef(cResult);
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  const items = [arg0, arg1];
  const effect1 = react.useEffect(() => {
    const obj = GuildRoleMemberActionCreators;
    const membersForRole = obj.requestMembersForRole(closure_0, closure_1);
    membersForRole.catch(ref.current);
  }, items);
  const items1 = [arg1];
  return closure_8(arg0, react.useCallback((roles) => {
    roles = roles.roles;
    return roles.includes(closure_1);
  }, items1));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQueryGuildMembers(arg0, arg1) {
  let closure_0;
  let ref;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  dependencyMap = react.useRef(false);
  const obj2 = react;
  if (cResult[0] === arg0) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = obj2.useEffect(tmp2, tmp3);
  }
  const fn = function o() {
    const obj = GuildUtilsDefault;
    const members = obj.requestMembers(closure_0, closure_1, 200);
    let current = "" === closure_1;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const tmpResult = AnalyticsUtilsDefault;
      tmpResult.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Role Members" });
      ref.current = true;
    }
  };
  const items = [arg0, arg1];
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useQueryGuildMembers(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const ref = react.useRef(false);
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    const obj = GuildUtilsDefault;
    const members = obj.requestMembers(closure_0, closure_1, 200);
    let current = "" === closure_1;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const tmpResult = AnalyticsUtilsDefault;
      tmpResult.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Role Members" });
      ref.current = true;
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export const useGuildMembers = tmp2;
export const useGuildRoleMembers = tmp3;
export const useQueryGuildMembers = tmp4;
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
