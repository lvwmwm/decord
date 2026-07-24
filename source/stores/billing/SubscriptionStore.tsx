// Module ID: 3782
// Function ID: 29399
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3777, 3783, 1194, 653, 566, 686, 2]

// Module 3782 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { isNoneSubscription } from "_isNativeReflectConstruct";
import { SubscriptionRecord } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function getUpdatedActiveSubscriptions(arg0) {
  let activeSubscriptions;
  let record;
  ({ activeSubscriptions, record } = arg0);
  const findIndexResult = activeSubscriptions.findIndex((id) => id.id === record.id);
  if (-1 === findIndexResult) {
    const items = [record];
    HermesBuiltin.arraySpread(activeSubscriptions, 1);
    return items;
  } else {
    const items1 = [];
    HermesBuiltin.arraySpread(activeSubscriptions, 0);
    if (isPaid(record)) {
      if (record.status !== constants.ENDED) {
        items1[findIndexResult] = record;
      }
      return items1;
    }
    items1.splice(findIndexResult, 1);
  }
}
function reset() {
  let c10 = null;
  let c11 = null;
  let c12 = null;
  let c13 = null;
  let c14 = null;
  let c15 = false;
  let c16 = null;
  let c17 = false;
  let c18 = false;
  let c20 = false;
  let c21 = null;
}
function isPaid(fromServer) {
  return fromServer.status !== constants.UNPAID;
}
function getSubscriptionOfType(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const tmp = flag ? c11 : c10;
  if (null == tmp) {
    return null;
  } else {
    for (const key10008 in tmp) {
      let tmp3 = key10008;
      let tmp4 = tmp[key10008];
      let tmp5 = store;
      if (tmp4.userId !== store.getId()) {
        return null;
      } else {
        if (tmp4.type !== arg0) {
          continue;
        } else {
          return tmp4;
        }
        continue;
      }
    }
    return null;
  }
}
({ SubscriptionStatusTypes: closure_8, SubscriptionTypes: closure_9 } = ME);
let c10 = null;
let c11 = null;
let c12 = null;
let c13 = null;
let c14 = null;
let c15 = false;
let c16 = null;
let c17 = false;
let c18 = false;
let c19 = null;
let c20 = false;
let c21 = null;
let tmp3 = ((Store) => {
  class SubscriptionStore {
    constructor() {
      self = this;
      tmp = SubscriptionStore(this, SubscriptionStore);
      obj = outer1_3(SubscriptionStore);
      tmp2 = outer1_2;
      if (outer1_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SubscriptionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasFetchedSubscriptions",
    value() {
      return null != outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasFetchedMostRecentPremiumTypeSubscription",
    value() {
      return outer1_15;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasFetchedPreviousPremiumTypeSubscription",
    value() {
      return outer1_17;
    }
  };
  items[4] = {
    key: "getPremiumSubscription",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return outer1_25(outer1_9.PREMIUM, (planId) => !outer2_5(planId.planId), flag);
    }
  };
  items[5] = {
    key: "getPremiumTypeSubscription",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return outer1_25(outer1_9.PREMIUM, undefined, flag);
    }
  };
  items[6] = {
    key: "getSubscriptions",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return flag ? outer1_11 : outer1_10;
    }
  };
  items[7] = {
    key: "getSubscriptionById",
    value(arg0) {
      let tmp2;
      if (null != outer1_10) {
        tmp2 = tmp[arg0];
      }
      let tmp4;
      if (null != tmp2) {
        tmp4 = tmp2;
      }
      return tmp4;
    }
  };
  items[8] = {
    key: "getActiveGuildSubscriptions",
    value() {
      return outer1_13;
    }
  };
  items[9] = {
    key: "getActiveApplicationSubscriptions",
    value() {
      return outer1_14;
    }
  };
  items[10] = {
    key: "getSubscriptionForPlanIds",
    value(items) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let set;
      set = new Set(items);
      const tmp2 = flag ? outer1_11 : outer1_10;
      let tmp3 = null;
      if (null != tmp2) {
        const _Object = Object;
        const values = Object.values(tmp2);
        const found = values.find((items) => {
          items = items.items;
          return items.some((planId) => outer1_0.has(planId.planId));
        });
        let tmp5 = null;
        if (null != found) {
          tmp5 = found;
        }
        tmp3 = tmp5;
      }
      return tmp3;
    }
  };
  items[11] = {
    key: "getMostRecentPremiumTypeSubscription",
    value() {
      return outer1_12;
    }
  };
  items[12] = {
    key: "getPreviousPremiumTypeSubscription",
    value() {
      return outer1_16;
    }
  };
  items[13] = {
    key: "getIsSubscriptionEligibleForReward",
    value() {
      return outer1_19;
    }
  };
  items[14] = {
    key: "getIsFetchingSubscriptionRewardEligibility",
    value() {
      return outer1_18;
    }
  };
  items[15] = {
    key: "getIsFetchingMostRecentSubscription",
    value() {
      return outer1_20;
    }
  };
  items[16] = {
    key: "getLastLazyPerkSync",
    value() {
      return outer1_21;
    }
  };
  items[17] = {
    key: "getPremiumGroupSubscription",
    value() {
      return outer1_25(outer1_9.PREMIUM, (hasAnyPremiumGroup) => hasAnyPremiumGroup.hasAnyPremiumGroup && hasAnyPremiumGroup.statusAllowsPerks, true);
    }
  };
  return callback(SubscriptionStore, items);
})(require("initialize").Store);
tmp3.displayName = "SubscriptionStore";
tmp3 = new tmp3(require("dispatcher"), {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    let obj = {};
    obj = {};
    const items = [];
    const items1 = [];
    const id = store.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === _inherits) {
        const fromServer = outer1_6.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (outer1_24(fromServer)) {
          obj[fromServer.id] = fromServer;
          let tmp3 = fromServer.type === outer1_9.GUILD;
          if (tmp3) {
            tmp3 = fromServer.status !== outer1_8.ENDED;
          }
          if (tmp3) {
            items.push(fromServer);
          }
          let tmp8 = fromServer.type === outer1_9.APPLICATION;
          if (tmp8) {
            tmp8 = fromServer.status !== outer1_8.ENDED;
          }
          if (tmp8) {
            items1.push(fromServer);
          }
        }
      }
    });
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    subscription = subscription.subscription;
    if (subscription.user_id === store.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      let obj = {};
      const merged = Object.assign(obj);
      obj[fromServer.id] = fromServer;
      if (isPaid(fromServer)) {
        obj = {};
        const merged1 = Object.assign(obj);
        obj[fromServer.id] = fromServer;
      }
      let tmp6 = null != closure_13;
      if (tmp6) {
        tmp6 = fromServer.type === constants2.GUILD;
      }
      if (tmp6) {
        obj = { activeSubscriptions: closure_13, record: fromServer };
        closure_13 = getUpdatedActiveSubscriptions(obj);
      }
      let tmp11 = null != c14;
      if (tmp11) {
        tmp11 = fromServer.type === constants2.APPLICATION;
      }
      if (tmp11) {
        const obj1 = { activeSubscriptions: c14, record: fromServer };
        closure_13 = getUpdatedActiveSubscriptions(obj1);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function handleMostRecentSubscriptionFetchStart() {
    let c20 = true;
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function handleMostRecentSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let c15 = true;
    let c20 = false;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        c15 = false;
      } else {
        let closure_12 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function handleMostRecentSubscriptionFetchFail() {
    let c20 = false;
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function handlePreviousSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let c17 = true;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        c17 = false;
      } else {
        let closure_16 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_SUBSCRIPTION_RESET: reset,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function handleSubscriptionRewardEligibilityFetchStart() {
    let c18 = true;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function handleSubscriptionRewardEligibilityFetch(eligible) {
    eligible = eligible.eligible;
    let c18 = false;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function handleSubscriptionRewardEligibilityFetchFailed(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c19 = false;
      let c18 = false;
    }
  },
  LOGOUT: reset
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/billing/SubscriptionStore.tsx");

export default tmp3;
export { getSubscriptionOfType };
