// Module ID: 5148
// Function ID: 44893
// Name: useGuildRoleMemberCounts
// Dependencies: [31, 5149, 566, 5150, 2]
// Exports: default

// Module 5148 (useGuildRoleMemberCounts)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let closure_5 = {};
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default function useGuildRoleMemberCounts(arg0) {
  let num = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    num = 0;
  }
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0, num];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getRoleMemberCount(closure_0));
  const effect = React.useEffect(() => {
    if (null != closure_0) {
      let tmp2 = null != tmp13;
      if (tmp2) {
        tmp2 = num > 0;
      }
      if (tmp2) {
        const _Date = Date;
        tmp2 = Date.now() - tmp13 < num;
      }
      if (!tmp2) {
        const _Date2 = Date;
        outer1_5[closure_0] = Date.now();
        const memberCounts = num(outer1_2[3]).fetchMemberCounts(closure_0);
        const obj = num(outer1_2[3]);
      }
    }
  }, items1);
  return stateFromStores;
};
