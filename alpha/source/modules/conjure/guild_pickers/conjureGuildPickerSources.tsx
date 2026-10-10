// Module ID: 17071
// Function ID: 17072
// Name: conjureGuildPickerSources
// Dependencies: [19, 2125, 2119, 1390, 558, 576, 504, 1388, 4962, 6096, 6097, 2]
// Exports: conjureMemberUsername

// Module 17071 (conjureGuildPickerSources)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import UserUtils from "UserUtils" /* 4962 */;
import GuildUtilsDefault from "GuildUtils" /* 6096 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildRoles(arg0) {
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
    const fn = function n() {
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildMemberUsers(arg0) {
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
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureMemberRequests(arg0, arg1) {
  let closure_0;
  let closure_1;
  let member;
  let obj2;
  let tmp2;
  let tmp3;
  let tmp5;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] !== arg1) {
    let items = arg1;
    if (undefined === arg1) {
      items = [];
    }
    cResult[0] = arg1;
    cResult[1] = items;
    obj2 = items;
  } else {
    obj2 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const fn = function c() {
      if (null != closure_0) {
        const obj = GuildUtilsDefault;
        const members = obj.requestMembers(tmp, "", 25);
      }
    };
    const items1 = [arg0];
    cResult[2] = arg0;
    cResult[3] = fn;
    cResult[4] = items1;
    tmp3 = items1;
    tmp2 = fn;
  } else {
    tmp2 = cResult[3];
    tmp3 = cResult[4];
  }
  const effect = react.useEffect(tmp2, tmp3);
  const obj3 = react;
  if (cResult[5] !== obj2) {
    let str = ",";
    const joined = obj2.join(",");
    cResult[5] = obj2;
    cResult[6] = joined;
    tmp5 = joined;
  } else {
    tmp5 = cResult[6];
  }
  importDefault = tmp5;
  if (cResult[7] === arg0) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[8] === tmp5) {
      tmp7 = cResult[9];
      tmp8 = cResult[10];
    }
    const effect1 = obj3.useEffect(tmp7, tmp8);
    if (cResult[11] !== arg0) {
      class C {
        constructor(str) {
          const trimmed = str.trim();
          let tmp3 = null != closure_0;
          const tmp2 = closure_0;
          if (tmp3) {
            tmp3 = "" !== trimmed;
          }
          if (tmp3) {
            const obj = GuildUtilsDefault;
            const members = obj.requestMembers(tmp2, trimmed, 25);
          }
        }
      }
      cResult[11] = arg0;
      cResult[12] = C;
      tmp10 = C;
    } else {
      class C {
        constructor(str) {
          const trimmed = str.trim();
          let tmp3 = null != closure_0;
          const tmp2 = closure_0;
          if (tmp3) {
            tmp3 = "" !== trimmed;
          }
          if (tmp3) {
            const obj = GuildUtilsDefault;
            const members = obj.requestMembers(tmp2, trimmed, 25);
          }
        }
      }
    }
    return tmp10;
  }
  const fn2 = function j() {
    if (null != closure_0) {
      const str = closure_1;
      if ("" !== closure_1) {
        const parts = str.split(",");
        const found = parts.filter((item) => !member.isMember(closure_1_0, item));
        if (found.length > 0) {
          const obj = GuildActionCreatorsDefault;
          const membersById = obj.requestMembersById(tmp, found);
        }
      }
    }
  };
  const items2 = [arg0, tmp5];
  cResult[7] = arg0;
  cResult[8] = tmp5;
  cResult[9] = fn2;
  cResult[10] = items2;
  tmp8 = items2;
  tmp7 = fn2;
}) : (function useConjureMemberRequests(arg0) {
  let member;
  let closure_0 = arg0;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  const items1 = [arg0];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(tmp, "", 25);
    }
  }, items1);
  const joined = items.join(",");
  const items2 = [arg0, joined];
  const effect1 = react.useEffect(() => {
    if (null != closure_0) {
      const str = joined;
      if ("" !== joined) {
        const parts = str.split(",");
        const found = parts.filter((item) => !member.isMember(closure_1_0, item));
        if (found.length > 0) {
          const obj = GuildActionCreatorsDefault;
          const membersById = obj.requestMembersById(tmp, found);
        }
      }
    }
  }, items2);
  const items3 = [arg0];
  return react.useCallback((str) => {
    const trimmed = str.trim();
    let tmp3 = null != closure_0;
    const tmp2 = closure_0;
    if (tmp3) {
      tmp3 = "" !== trimmed;
    }
    if (tmp3) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(tmp2, trimmed, 25);
    }
  }, items3);
});
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/conjureGuildPickerSources.tsx");

export const useConjureGuildRoles = tmp2;
export const useConjureGuildMemberUsers = tmp3;
export const conjureMemberUsername = function conjureMemberUsername(hasUniqueUsername, stateFromStores1) {
  let str = "always";
  const getUserTag = UserUtils.getUserTag;
  UserUtils;
  if (stateFromStores1) {
    str = "never";
  }
  let str2 = "";
  const userTag = getUserTag(hasUniqueUsername, { mode: "username", identifiable: str });
  if (!stateFromStores1) {
    str2 = "";
    if (!hasUniqueUsername.hasUniqueUsername()) {
      const _HermesInternal = HermesInternal;
      str2 = "#" + hasUniqueUsername.discriminator;
    }
  }
  return "" + userTag + str2;
};
export const useConjureMemberRequests = tmp4;
