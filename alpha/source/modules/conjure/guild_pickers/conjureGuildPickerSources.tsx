// Module ID: 17003
// Function ID: 17004
// Name: conjureGuildPickerSources
// Dependencies: [2124, 2118, 1390, 558, 576, 504, 1388, 2]

// Module 17003 (conjureGuildPickerSources)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildRoles(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let sortedRoles;
      if (null != closure_0) {
        sortedRoles = GuildRoleStore.getSortedRoles(tmp);
      } else {
        sortedRoles = [];
      }
      return sortedRoles;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
}) : (function useConjureGuildRoles(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildMemberUsers(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useConjureGuildMemberUsers(arg0) {
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
});
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/conjureGuildPickerSources.tsx");

export const useConjureGuildRoles = tmp2;
export const useConjureGuildMemberUsers = tmp3;
