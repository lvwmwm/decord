// Module ID: 6543
// Function ID: 6544
// Name: useGuildRoleMemberCounts
// Dependencies: [19, 6544, 504, 6545, 2]
// Exports: default

// Module 6543 (useGuildRoleMemberCounts)
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6545 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6544 */;

const require = globalThis.__r;

const require = fn;
let closure_5 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default function useGuildRoleMemberCounts(arg0) {
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
};
