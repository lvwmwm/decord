// Module ID: 7374
// Function ID: 7375
// Name: useGuildRoleMemberCounts
// Dependencies: [19, 7375, 558, 568, 504, 7376, 2]

// Module 7374 (useGuildRoleMemberCounts)
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 7376 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7375 */;

const require = globalThis.__r;

const require = fn;
let closure_5 = {};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(7);
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
  require("initialize");
  if (cResult[3] === arg0) {
    if (cResult[4] === num) {
      let tmp9 = cResult[5];
      let tmp10 = cResult[6];
    }
    const effect = noop.useEffect(tmp9, tmp10);
    return tmp8;
  }
  const fn2 = function v() {
    if (null != closure_0) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = num > 0;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - tmp3 < num;
      }
      if (!tmp4) {
        const _Date2 = Date;
        tmp2[tmp] = Date.now();
        const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(tmp);
      }
      tmp2 = closure_5;
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
  _require = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const items = [GuildRoleMemberCountStore];
  const items1 = [arg0, num];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildRoleMemberCountStore.getRoleMemberCount(closure_0));
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = num > 0;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - tmp3 < num;
      }
      if (!tmp4) {
        const _Date2 = Date;
        tmp2[tmp] = Date.now();
        const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(tmp);
      }
      tmp2 = closure_5;
    }
  }, items1);
  return stateFromStores;
});
