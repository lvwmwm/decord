// Module ID: 15493
// Function ID: 15494
// Name: useManageSubscriptionCardData
// Dependencies: [32, 19, 2087, 4743, 1085, 4702, 6939, 1126, 558, 576, 15484, 504, 15482, 2]

// Module 15493 (useManageSubscriptionCardData)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef4702 from "module_4702" /* 4702 */;
import PriceUtils from "PriceUtils" /* 6939 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 2087 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4743 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tmp3, tmp5, tmp9;

function computeSubscriptionInfo(subscription) {
  let PAST_DUE;
  let hasActiveTrial;
  let status;
  let stringResult;
  subscription = subscription.subscription;
  let str = "";
  const obj = _modDef4702(subscription.currentPeriodEnd);
  const formatResult = obj.format("M/D/YY");
  if (null != subscription.price) {
    const obj2 = PriceUtils;
    str = obj2.formatPrice(subscription.price, subscription.currency);
  }
  const obj3 = _modDef4702(subscription.createdAt);
  const obj4 = { memberSince: obj3.format("M/D/YY"), nextRenewalDate: formatResult, nextRenewalLabel: stringResult, subscriptionPrice: str, isCancelled: subscription.status === SubscriptionStatusTypes.CANCELED, isPastDue: status === PAST_DUE, isTrial: hasActiveTrial };
  status = subscription.status;
  PAST_DUE = SubscriptionStatusTypes.PAST_DUE;
  hasActiveTrial = subscription.hasActiveTrial;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if (subscription.status === SubscriptionStatusTypes.CANCELED) {
    stringResult = string(t.UAfot2);
  } else {
    stringResult = string(t.CVjLcM);
  }
  return obj4;
}
let GuildStore = GuildStore_mod;
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useManageSubscriptionCardData(items) {
  let closure_0;
  let closure_5;
  let fetchSubscriptionsSettings;
  let first;
  let stateFromStores1;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== items) {
    const tmpResult = tmp(stateFromStores1[10]);
    const roleSubscriptionPlanId = tmpResult.getRoleSubscriptionPlanId(items);
    cResult[0] = items;
    cResult[1] = roleSubscriptionPlanId;
    tmp4 = roleSubscriptionPlanId;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    items = [fetchSubscriptionsSettings];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    cResult[3] = tmp4;
    cResult[4] = S;
    tmp8 = S;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmpResult5 = tmp(stateFromStores1[11]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp6, tmp8);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    const items1 = [fetchSubscriptionsSettings];
    cResult[5] = items1;
    tmp10 = items1;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp12;
    tmp11 = tmp12;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmpResult6 = tmp(stateFromStores1[11]);
  stateFromStores1 = tmpResult6.useStateFromStores(tmp10, tmp11);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    const items2 = [GuildStore];
    cResult[8] = items2;
    tmp14 = items2;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmp15 = cResult[9];
  if (stateFromStores1 != null) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  if (tmp15 !== undefined) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    if (stateFromStores1 != null) {
      class S {
        constructor() {
          return closure_6.getSubscriptionListingForPlan(closure_0);
        }
      }
    }
    class F {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        getGuild = closure_5.getGuild;
        if (closure_2 != null) {
          guild_id = closure_2.guild_id;
        }
        return getGuild(guild_id);
      }
    }
    cResult[9] = tmp17;
    cResult[10] = F;
    tmp16 = F;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmpResult7 = tmp(stateFromStores1[11]);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp14, tmp16);
  const tmp19 = stateFromStores2(first.useState(false), 2);
  first = tmp19[0];
  GuildStore = tmp19[1];
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    class F {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        getGuild = closure_5.getGuild;
        if (closure_2 != null) {
          guild_id = closure_2.guild_id;
        }
        return getGuild(guild_id);
      }
    }
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmpResult8 = tmp(stateFromStores1[12]);
  fetchSubscriptionsSettings = tmpResult8.useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  if (cResult[12] === first) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  class T {
    constructor() {
      tmp = closure_4;
      if (tmp) {
        tmp2 = closure_3;
        tmp3 = null;
        tmp = null != closure_3;
      }
      if (tmp) {
        tmp4 = closure_6;
        tmp5 = closure_3;
        tmp6 = null;
        tmp = null == closure_6.getSubscriptionSettings(closure_3.id);
      }
      if (tmp) {
        tmp7 = closure_6;
        tmp8 = closure_3;
        tmp9 = closure_6(closure_3.id);
      }
      return;
    }
  }
  const items3 = [first, stateFromStores2, fetchSubscriptionsSettings];
  cResult[12] = first;
  cResult[13] = fetchSubscriptionsSettings;
  cResult[14] = stateFromStores2;
  cResult[15] = T;
  cResult[16] = items3;
}) : (function useManageSubscriptionCardData(subscription) {
  let closure_0;
  let expanded;
  let fetchSubscriptionsSettings;
  let stateFromStores1;
  const obj = require("subscriptionUtils");
  _require = obj.getRoleSubscriptionPlanId(subscription);
  const items = [fetchSubscriptionsSettings];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionListingForPlan(closure_0));
  const items1 = [fetchSubscriptionsSettings];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let subscriptionGroupListingForSubscriptionListing = null;
    if (null != stateFromStores) {
      subscriptionGroupListingForSubscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(tmp.id);
    }
    return subscriptionGroupListingForSubscriptionListing;
  });
  const items2 = [closure_5];
  const obj4 = require("get initialized");
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return getGuild(guild_id);
  });
  const tmp4 = stateFromStores2(expanded.useState(false), 2);
  expanded = tmp4[0];
  closure_5 = tmp4[1];
  const obj5 = require("GuildRoleSubscriptionsHooks");
  fetchSubscriptionsSettings = obj5.useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  const items3 = [expanded, stateFromStores2, fetchSubscriptionsSettings];
  const effect = expanded.useEffect(() => {
    const tmp = first && null != stateFromStores2 && null == GuildRoleSubscriptionsStore.getSubscriptionSettings(stateFromStores2.id);
    if (tmp) {
      fetchSubscriptionsSettings(stateFromStores2.id);
    }
  }, items3);
  let tmp7;
  if (null != stateFromStores) {
    const obj6 = { subscription };
    tmp7 = computeSubscriptionInfo(obj6);
  }
  return {
    guild: stateFromStores2,
    expanded,
    handleToggleExpanded() {
      return closure_5((arg0) => !arg0);
    },
    listing: stateFromStores,
    groupListing: stateFromStores1,
    subscriptionInfo: tmp7
  };
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx");

export default tmp2;
