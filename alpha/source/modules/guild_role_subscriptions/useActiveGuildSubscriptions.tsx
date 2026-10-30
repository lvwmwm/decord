// Module ID: 17131
// Function ID: 17132
// Name: useActiveGuildSubscriptions
// Dependencies: [19, 2053, 17125, 17126, 504, 6529, 2]
// Exports: default

// Module 17131 (useActiveGuildSubscriptions)
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 6529 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17125 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 17126 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import size from "module_2" /* 2 */;

let activeGuildSubscriptions, importDefault;

const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
let closure_7 = [];
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default function useActiveGuildSubscriptions() {
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
      tmp5 = !tmp6;
    }
    if (!tmp5) {
      tmp5 = !current && !obj.hasFetchedSubscriptions();
      !current && !SubscriptionStore.hasFetchedSubscriptions();
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
};
