// Module ID: 7004
// Function ID: 7005
// Name: subscribeGuildMembers
// Dependencies: [19, 5958, 1390, 558, 576, 12, 1255, 7005, 2]

// Module 7004 (subscribeGuildMembers)
import _modDef12 from "module_12" /* 12 */;
import react from "react" /* 19 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5958 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c6 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSubscribeGuildMembers(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function l() {
    let reason;
    let arr = _modDef12;
    let item = arr.forEach(closure_0, (userIds, guildId) => {
      let obj3;
      const tmp = !c6 && userIds.length > 50;
      if (tmp) {
        c6 = true;
        const obj2 = { extra: obj3 };
        obj3 = { count: userIds.length, guildId, reason };
        const obj = reason(dependencyMap[6]);
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
      }
      const obj4 = closure_0(dependencyMap[7]);
      obj4.subscribeMembers(guildId, userIds);
    });
    return () => {
      const arr = reason(dependencyMap[5]);
      const item = arr.forEach(closure_1_0, (userIds, guildId) => {
        const obj = closure_1_0(closure_1_2[7]);
        return obj.unsubscribeMembers(guildId, userIds);
      });
    };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useSubscribeGuildMembers(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    let reason;
    let arr = _modDef12;
    let item = arr.forEach(closure_0, (userIds, guildId) => {
      let obj3;
      const tmp = !c6 && userIds.length > 50;
      if (tmp) {
        c6 = true;
        const obj2 = { extra: obj3 };
        obj3 = { count: userIds.length, guildId, reason };
        const obj = reason(dependencyMap[6]);
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
      }
      const obj4 = closure_0(dependencyMap[7]);
      obj4.subscribeMembers(guildId, userIds);
    });
    return () => {
      const arr = reason(dependencyMap[5]);
      const item = arr.forEach(closure_1_0, (userIds, guildId) => {
        const obj = closure_1_0(closure_1_2[7]);
        return obj.unsubscribeMembers(guildId, userIds);
      });
    };
  }, items);
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnsureHydratedGuildUsers(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let user;
  _require = arg0;
  importDefault = arg1;
  const obj = require("react");
  const cResult = obj.c(8);
  if (0 !== arg1.length) {
    if (cResult[1] === arg0) {
      let tmp4;
      if (cResult[2] === arg1) {
        tmp4 = cResult[3];
      }
      first = tmp4;
    }
    const obj2 = {};
    obj2[arg0] = arg1;
    cResult[1] = arg0;
    cResult[2] = arg1;
    cResult[3] = obj2;
    tmp4 = obj2;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {};
      cResult[0] = obj3;
      first = obj3;
    } else {
      first = cResult[0];
    }
  }
  if (cResult[4] === arg0) {
    let tmp5;
    let tmp6;
    if (cResult[5] === arg1) {
      tmp5 = cResult[6];
      tmp6 = cResult[7];
    }
    const effect = react.useEffect(tmp5, tmp6);
    closure_7(first, "useEnsureHydratedGuildUsers");
  }
  class M {
    constructor() {
      item = closure_1.forEach(() => { /* body not rendered: F139656 */ });
      return;
    }
  }
  const items = [arg0, arg1];
  cResult[4] = arg0;
  cResult[5] = arg1;
  cResult[6] = M;
  cResult[7] = items;
  tmp6 = items;
  tmp5 = M;
}) : (function useEnsureHydratedGuildUsers(arg0, arg1) {
  let user;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const items1 = [arg0, arg1];
  const memo = react.useMemo(() => {
    let obj;
    if (0 === closure_1.length) {
      obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  const effect = react.useEffect(() => {
    const item = closure_1.forEach((item) => {
      if (null == user.getUser(item)) {
        const member = GuildMemberRequesterStore.requestMember(closure_1_0, item);
      }
    });
  }, items1);
  closure_7(memo, "useEnsureHydratedGuildUsers");
});
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = tmp2;
export const useEnsureHydratedGuildUsers = tmp3;
