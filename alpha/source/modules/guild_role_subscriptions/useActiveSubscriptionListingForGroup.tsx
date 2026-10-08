// Module ID: 16788
// Function ID: 16789
// Name: useActiveSubscriptionListingForGroup
// Dependencies: [19, 4731, 4732, 4700, 1085, 558, 576, 504, 15309, 6946, 2]

// Module 16788 (useActiveSubscriptionListingForGroup)
import Constants from "Constants" /* 1085 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6946 */;
import subscriptionUtils from "subscriptionUtils" /* 15309 */;
import react_mod from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4731 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4700 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, dependencyMap;

let react = react_mod;
const SubscriptionTypes = Constants.SubscriptionTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveSubscriptionListingForGroup(arg0) {
  let activeSubscription;
  let activeSubscriptionListing;
  let closure_0;
  let closure_1;
  let stateFromStores1;
  let tmp10;
  let tmp22;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let tmp2 = _require;
  const tmp3 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp8 = stateFromStores1;
    const items = [stateFromStores1];
    const fn = function p() {
      return stateFromStores1.getSubscriptions();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmp2Result = tmp2(504);
  const stateFromStores = tmp2Result.useStateFromStores(tmp6, tmp7);
  if (null != stateFromStores) {
    let tmp11;
    if (cResult[3] !== stateFromStores) {
      let obj2 = {};
      const _Object = Object;
      const values = Object.values(stateFromStores);
      let tmp13 = values;
      let tmp14 = values;
      for (const item10048 of values) {
        let tmp15 = item10048;
        if (item10048.type === SubscriptionTypes.GUILD) {
          let obj5 = require("subscriptionUtils");
          obj2[obj5.getRoleSubscriptionPlanId(tmp15)] = tmp15;
        }
        continue;
      }
      cResult[3] = stateFromStores;
      cResult[4] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[4];
    }
    tmp10 = tmp11;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {};
      cResult[2] = obj3;
      tmp10 = obj3;
    } else {
      tmp10 = cResult[2];
    }
  }
  dependencyMap = tmp10;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [c5];
    cResult[5] = items1;
    tmp22 = items1;
  } else {
    tmp22 = cResult[5];
  }
  if (cResult[6] === arg0) {
    let tmp24;
    let tmp33;
    let tmp35;
    if (cResult[7] === tmp10) {
      tmp24 = cResult[8];
    }
    const obj6 = require("get initialized");
    const stateFromStoresObject = obj6.useStateFromStoresObject(tmp22, tmp24);
    ({ activeSubscription, activeSubscriptionListing } = stateFromStoresObject);
    let first;
    const tmp25 = _require;
    if (activeSubscriptionListing != null) {
      first = activeSubscriptionListing.subscription_plans[0];
    }
    let id;
    if (first != null) {
      id = first.id;
    }
    let sku_id;
    if (first != null) {
      sku_id = first.sku_id;
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [sku_id];
      cResult[9] = items2;
      tmp33 = items2;
    } else {
      tmp33 = cResult[9];
    }
    if (cResult[10] !== id) {
      class P {
        constructor() {
          let value = null;
          if (null != id) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        }
      }
      cResult[10] = id;
      cResult[11] = P;
      tmp35 = P;
    } else {
      class P {
        constructor() {
          let value = null;
          if (null != id) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        }
      }
    }
    const tmp25Result = tmp25(504);
    stateFromStores1 = tmp25Result.useStateFromStores(tmp33, tmp35);
    if (activeSubscriptionListing != null) {
      class P {
        constructor() {
          let value = null;
          if (null != id) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        }
      }
    }
    c5 = tmp37;
    if (cResult[12] === undefined) {
      class P {
        constructor() {
          let value = null;
          if (null != id) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        }
      }
    }
    class A {
      constructor() {
        const isFetchingForSKUResult = null != stateFromStores1 || null == sku_id || SubscriptionPlanStore.isFetchingForSKU(sku_id);
        if (!isFetchingForSKUResult) {
          const obj = SubscriptionPlanActionCreators;
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, c5);
        }
      }
    }
    const items3 = [stateFromStores1, sku_id, undefined];
    cResult[12] = undefined;
    cResult[13] = stateFromStores1;
    cResult[14] = sku_id;
    cResult[15] = A;
    cResult[16] = items3;
  }
  const fn2 = function h() {
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
        let tmp13 = closure_1[tmp10];
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
  };
  cResult[6] = arg0;
  cResult[7] = tmp10;
  cResult[8] = fn2;
  tmp24 = fn2;
}) : (function useActiveSubscriptionListingForGroup(arg0) {
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
  const tmpResult = tmp(tmp2[7]);
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
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default tmp2;
