// Module ID: 15306
// Function ID: 15307
// Name: useActiveGuildSubscriptions
// Dependencies: [19, 4732, 15300, 558, 576, 15301, 504, 5720, 2]

// Module 15306 (useActiveGuildSubscriptions)
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 5720 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15300 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 15301 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, activeGuildSubscriptions, importDefault;

const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
let closure_7 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveGuildSubscriptions(arg0) {
  let closure_0;
  let closure_1;
  let tmp4;
  let tmp7;
  let tmp8;
  let tmp2 = dependencyMap;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    let num = 0;
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const ensureFresh = tmp4.ensureFresh;
  let tmp5 = undefined !== ensureFresh && ensureFresh;
  _require = tmp5;
  let tmp6 = useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  importDefault = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    class S {
      constructor() {
        return activeGuildSubscriptions.getActiveGuildSubscriptions();
      }
    }
    cResult[2] = items;
    cResult[3] = S;
    tmp8 = S;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const ref = react.useRef(false);
  const obj4 = react;
  if (cResult[4] === tmp5) {
    let tmp11;
    let tmp12;
    if (cResult[5] === tmp6) {
      tmp11 = cResult[6];
      tmp12 = cResult[7];
    }
    const effect = obj4.useEffect(tmp11, tmp12);
    class S {
      constructor() {
        return activeGuildSubscriptions.getActiveGuildSubscriptions();
      }
    }
    return stateFromStores;
  }
  const fn = function v() {
    const current = ref.current;
    activeGuildSubscriptions = SubscriptionStore.getActiveGuildSubscriptions();
    let num;
    const tmp2 = closure_1;
    const tmp3 = ref;
    if (activeGuildSubscriptions != null) {
      num = activeGuildSubscriptions.length;
    }
    if (num == null) {
      num = 0;
    }
    let tmp5 = !tmp4;
    if (0 !== num || !tmp2) {
      let tmp6 = !tmp;
      if (closure_0) {
        tmp6 = current;
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        tmp7 = !current && !obj.hasFetchedSubscriptions();
        !current && !SubscriptionStore.hasFetchedSubscriptions();
      }
      tmp5 = tmp7;
    }
    if (tmp5) {
      tmp3.current = true;
      const obj2 = actions_BillingActionCreatorsAll;
      const subscriptions = obj2.fetchSubscriptions();
    }
  };
  const items1 = [tmp5, tmp6];
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp12 = items1;
  tmp11 = fn;
}) : (function useActiveGuildSubscriptions() {
  let closure_1;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.ensureFresh;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  importDefault = tmp;
  let obj2 = flag(504);
  const items = [SubscriptionStore];
  let stateFromStores = obj2.useStateFromStores(items, () => activeGuildSubscriptions.getActiveGuildSubscriptions());
  const ref = react.useRef(false);
  const items1 = [flag, tmp];
  const effect = react.useEffect(() => {
    const current = ref.current;
    activeGuildSubscriptions = SubscriptionStore.getActiveGuildSubscriptions();
    let num;
    const tmp2 = closure_1;
    const tmp3 = ref;
    if (activeGuildSubscriptions != null) {
      num = activeGuildSubscriptions.length;
    }
    if (num == null) {
      num = 0;
    }
    let tmp5 = !tmp4;
    if (0 !== num || !tmp2) {
      let tmp6 = !tmp;
      if (flag) {
        tmp6 = current;
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        tmp7 = !current && !obj.hasFetchedSubscriptions();
        !current && !SubscriptionStore.hasFetchedSubscriptions();
      }
      tmp5 = tmp7;
    }
    if (tmp5) {
      tmp3.current = true;
      const obj2 = actions_BillingActionCreatorsAll;
      const subscriptions = obj2.fetchSubscriptions();
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default tmp2;
