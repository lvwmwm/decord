// Module ID: 16188
// Function ID: 16189
// Name: useActiveSubscriptionListingForGroup
// Dependencies: [19, 4493, 4494, 4462, 1074, 504, 14759, 6675, 2]
// Exports: default

// Module 16188 (useActiveSubscriptionListingForGroup)
import Constants from "Constants" /* 1074 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6675 */;
import subscriptionUtils from "subscriptionUtils" /* 14759 */;
import react_mod from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const SubscriptionTypes = Constants.SubscriptionTypes;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default function useActiveSubscriptionListingForGroup(arg0) {
  let activeSubscriptionPlanFromStore;
  let closure_0;
  let closure_2;
  let sku_id;
  let stateFromStores;
  _require = arg0;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("get initialized");
  const items = [sku_id];
  stateFromStores = obj.useStateFromStores(items, () => sku_id.getSubscriptions());
  let obj2 = react;
  const items1 = [stateFromStores];
  react = react.useMemo(() => {
    if (null == stateFromStores) {
      return {};
    } else {
      const obj = {};
      const _Object = Object;
      const values = Object.values(tmp);
      for (const item10012 of values) {
        let tmp6 = item10012;
        if (item10012.type === SubscriptionTypes.GUILD) {
          let obj2 = subscriptionUtils;
          obj[obj2.getRoleSubscriptionPlanId(tmp6)] = tmp6;
        }
        continue;
      }
      return obj;
    }
  }, items1);
  const items2 = [activeSubscriptionPlanFromStore];
  const obj3 = require("get initialized");
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let tmp2 = null;
    let subscriptionGroupListing = null;
    if (null != closure_0) {
      subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp3);
    }
    let prop;
    if (subscriptionGroupListing != null) {
      prop = subscriptionGroupListing.subscription_listings_ids;
    }
    if (prop == null) {
      prop = [];
    }
    for (const item10017 of prop) {
      let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10017);
      id = undefined;
      if (subscriptionListing != null) {
        id = subscriptionListing.subscription_plans[0].id;
      }
      if (null != id) {
        let tmp;
        let tmp13 = closure_2[tmp10];
        if (null != tmp13) {
          tmp2 = tmp13;
          tmp = subscriptionListing;
          obj.return();
          break;
        }
        let obj2 = { activeSubscription: tmp2, activeSubscriptionListing: tmp };
        return obj2;
      }
      continue;
    }
  });
  const activeSubscriptionListing = stateFromStoresObject.activeSubscriptionListing;
  let first;
  const activeSubscription = stateFromStoresObject.activeSubscription;
  if (activeSubscriptionListing != null) {
    first = activeSubscriptionListing.subscription_plans[0];
  }
  let id;
  if (first != null) {
    id = first.id;
  }
  sku_id = undefined;
  if (first != null) {
    sku_id = first.sku_id;
  }
  const items3 = [id];
  const tmpResult = tmp(tmp2[5]);
  activeSubscriptionPlanFromStore = tmpResult.useStateFromStores(items3, () => {
    let value = null;
    if (null != id) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  });
  let soft_deleted;
  if (activeSubscriptionListing != null) {
    soft_deleted = activeSubscriptionListing.soft_deleted;
  }
  const items4 = [activeSubscriptionPlanFromStore, sku_id, soft_deleted];
  const effect = obj2.useEffect(() => {
    const isFetchingForSKUResult = null != activeSubscriptionPlanFromStore || null == sku_id || SubscriptionPlanStore.isFetchingForSKU(sku_id);
    if (!isFetchingForSKUResult) {
      const obj = SubscriptionPlanActionCreators;
      const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, soft_deleted);
    }
  }, items4);
  return { activeSubscription, activeSubscriptionListing, activeSubscriptionPlanFromStore };
};
