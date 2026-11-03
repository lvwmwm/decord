// Module ID: 7417
// Function ID: 7418
// Name: useGuildRoleMemberCounts
// Dependencies: [19, 7418, 504, 7419, 2]
// Exports: default

// Module 7417 (useGuildRoleMemberCounts)
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 7419 */;
import react from "react" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7418 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_5 = {};
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default function useGuildRoleMemberCounts(arg0) {
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
};
