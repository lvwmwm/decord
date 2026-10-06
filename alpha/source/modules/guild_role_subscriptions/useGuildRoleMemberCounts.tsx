// Module ID: 6629
// Function ID: 6630
// Name: useGuildRoleMemberCounts
// Dependencies: [19, 6630, 558, 576, 504, 6631, 2]

// Module 6629 (useGuildRoleMemberCounts)
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6631 */;
import react from "react" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6630 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_5 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(7);
  let num = 0;
  if (undefined !== arg1) {
    num = arg1;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
  }
  tmp(504);
  if (cResult[3] === arg0) {
    let tmp9;
    let tmp10;
    if (cResult[4] === num) {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    const effect = react.useEffect(tmp9, tmp10);
    return tmp8;
  }
  const fn2 = function v() {
    if (null != closure_0) {
      let tmp4 = null != tmp3;
      const tmp2 = closure_5;
      if (tmp4) {
        tmp4 = num > 0;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - tmp3 < num;
      }
      if (!tmp4) {
        const _Date2 = Date;
        tmp2[closure_0] = Date.now();
        const obj = GuildRoleMemberActionCreatorsAll;
        const memberCounts = obj.fetchMemberCounts(tmp);
      }
    }
  };
  const items1 = [arg0, num];
  cResult[3] = arg0;
  cResult[4] = num;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp10 = items1;
  tmp9 = fn2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let obj = require("get initialized");
  const items = [GuildRoleMemberCountStore];
  const items1 = [arg0, num];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleMemberCountStore.getRoleMemberCount(closure_0));
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      let tmp4 = null != tmp3;
      const tmp2 = closure_5;
      if (tmp4) {
        tmp4 = num > 0;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - tmp3 < num;
      }
      if (!tmp4) {
        const _Date2 = Date;
        tmp2[closure_0] = Date.now();
        const obj = GuildRoleMemberActionCreatorsAll;
        const memberCounts = obj.fetchMemberCounts(tmp);
      }
    }
  }, items1);
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default tmp2;
