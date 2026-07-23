// Module ID: 14100
// Function ID: 108418
// Name: useActiveGuildSubscriptions
// Dependencies: [31, 3782, 14094, 14095, 566, 4451, 2]
// Exports: default

// Module 14100 (useActiveGuildSubscriptions)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserGuildRoleSubscriptionRelationship as closure_6 } from "MAX_SUBSCRIPTION_TIERS";

const require = arg1;
let closure_7 = [];
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default function useActiveGuildSubscriptions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.ensureFresh;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let closure_2;
  const tmp = importDefault(14095)() === constants.SUBSCRIBED;
  importDefault = tmp;
  const items = [_isNativeReflectConstruct];
  let stateFromStores = flag(566).useStateFromStores(items, () => outer1_5.getActiveGuildSubscriptions());
  closure_2 = React.useRef(false);
  const items1 = [flag, tmp];
  const effect = React.useEffect(() => {
    let ensureFresh;
    let hasRoleSubscriptions;
    const obj = { ensureFresh: flag, hasRoleSubscriptions: c1, hasFetched: ref.current };
    const hasFetched = obj.hasFetched;
    ({ ensureFresh, hasRoleSubscriptions } = obj);
    const activeGuildSubscriptions = outer1_5.getActiveGuildSubscriptions();
    let length;
    if (null != activeGuildSubscriptions) {
      length = activeGuildSubscriptions.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    let tmp3 = !tmp2;
    if (0 !== num || !hasRoleSubscriptions) {
      tmp3 = !(!ensureFresh || hasFetched);
      const tmp4 = !ensureFresh || hasFetched;
    }
    if (!tmp3) {
      let tmp5 = !hasFetched;
      if (tmp5) {
        tmp5 = !outer1_5.hasFetchedSubscriptions();
      }
      tmp3 = tmp5;
    }
    if (tmp3) {
      ref.current = true;
      const subscriptions = ref(outer1_3[5]).fetchSubscriptions();
      const obj2 = ref(outer1_3[5]);
    }
  }, items1);
  if (null == stateFromStores) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
};
