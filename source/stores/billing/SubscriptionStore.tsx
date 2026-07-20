// Module ID: 3780
// Function ID: 29388
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3780 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getUpdatedActiveSubscriptions(arg0) {
  let activeSubscriptions;
  let record;
  ({ activeSubscriptions, record } = arg0);
  let closure_0 = record;
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
  let closure_10 = null;
  let closure_11 = null;
  let closure_12 = null;
  let closure_13 = null;
  let closure_14 = null;
  let closure_15 = false;
  let closure_16 = null;
  let closure_17 = false;
  let closure_18 = false;
  let closure_20 = false;
  let closure_21 = null;
}
function isPaid(fromServer) {
  return fromServer.status !== constants.UNPAID;
}
function getSubscriptionOfType(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const tmp = flag ? closure_11 : closure_10;
  if (null == tmp) {
    return null;
  } else {
    for (const key10008 in tmp) {
      let tmp3 = key10008;
      let tmp4 = tmp[key10008];
      let tmp5 = closure_7;
      if (tmp4.userId !== closure_7.getId()) {
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const isNoneSubscription = arg1(dependencyMap[5]).isNoneSubscription;
const SubscriptionRecord = arg1(dependencyMap[6]).SubscriptionRecord;
let closure_7 = importDefault(dependencyMap[7]);
({ SubscriptionStatusTypes: closure_8, SubscriptionTypes: closure_9 } = arg1(dependencyMap[8]));
let closure_10 = null;
let closure_11 = null;
let closure_12 = null;
let closure_13 = null;
let closure_14 = null;
let closure_15 = false;
let closure_16 = null;
let closure_17 = false;
let closure_18 = false;
let closure_19 = null;
let closure_20 = false;
let closure_21 = null;
let tmp3 = (Store) => {
  class SubscriptionStore {
    constructor() {
      self = this;
      tmp = SubscriptionStore(this, SubscriptionStore);
      obj = closure_3(SubscriptionStore);
      tmp2 = closure_2;
      if (closure_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = SubscriptionStore;
  callback2(SubscriptionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasFetchedSubscriptions",
    value() {
      return null != closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasFetchedMostRecentPremiumTypeSubscription",
    value() {
      return closure_15;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasFetchedPreviousPremiumTypeSubscription",
    value() {
      return closure_17;
    }
  };
  items[4] = {
    key: "getPremiumSubscription",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return callback3(constants.PREMIUM, (planId) => !callback(planId.planId), flag);
    }
  };
  items[5] = {
    key: "getPremiumTypeSubscription",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return callback3(constants.PREMIUM, undefined, flag);
    }
  };
  items[6] = {
    key: "getSubscriptions",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      return flag ? closure_11 : closure_10;
    }
  };
  items[7] = {
    key: "getSubscriptionById",
    value(arg0) {
      let tmp2;
      if (null != closure_10) {
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
      return closure_13;
    }
  };
  items[9] = {
    key: "getActiveApplicationSubscriptions",
    value() {
      return closure_14;
    }
  };
  items[10] = {
    key: "getSubscriptionForPlanIds",
    value(items) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let SubscriptionStore;
      SubscriptionStore = new Set(items);
      const tmp2 = flag ? closure_11 : closure_10;
      let tmp3 = null;
      if (null != tmp2) {
        const _Object = Object;
        const values = Object.values(tmp2);
        const found = values.find((items) => {
          items = items.items;
          return items.some((planId) => set.has(planId.planId));
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
      return closure_12;
    }
  };
  items[12] = {
    key: "getPreviousPremiumTypeSubscription",
    value() {
      return closure_16;
    }
  };
  items[13] = {
    key: "getIsSubscriptionEligibleForReward",
    value() {
      return closure_19;
    }
  };
  items[14] = {
    key: "getIsFetchingSubscriptionRewardEligibility",
    value() {
      return closure_18;
    }
  };
  items[15] = {
    key: "getIsFetchingMostRecentSubscription",
    value() {
      return closure_20;
    }
  };
  items[16] = {
    key: "getLastLazyPerkSync",
    value() {
      return closure_21;
    }
  };
  items[17] = {
    key: "getPremiumGroupSubscription",
    value() {
      return callback3(constants.PREMIUM, (hasAnyPremiumGroup) => hasAnyPremiumGroup.hasAnyPremiumGroup && hasAnyPremiumGroup.statusAllowsPerks, true);
    }
  };
  return callback(SubscriptionStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp3.displayName = "SubscriptionStore";
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    let obj = {};
    let closure_0 = obj;
    obj = {};
    let closure_1 = obj;
    const items = [];
    let closure_2 = items;
    const items1 = [];
    let closure_3 = items1;
    const id = store.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === closure_4) {
        const fromServer = closure_6.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (callback(fromServer)) {
          obj[fromServer.id] = fromServer;
          let tmp3 = fromServer.type === constants2.GUILD;
          if (tmp3) {
            tmp3 = fromServer.status !== constants.ENDED;
          }
          if (tmp3) {
            items.push(fromServer);
          }
          let tmp8 = fromServer.type === constants2.APPLICATION;
          if (tmp8) {
            tmp8 = fromServer.status !== constants.ENDED;
          }
          if (tmp8) {
            items1.push(fromServer);
          }
        }
      }
    });
    let closure_10 = obj;
    let closure_11 = obj;
    let closure_13 = items;
    let closure_14 = items1;
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    subscription = subscription.subscription;
    if (subscription.user_id === store.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      let obj = {};
      const merged = Object.assign(closure_10);
      obj[fromServer.id] = fromServer;
      closure_10 = obj;
      if (isPaid(fromServer)) {
        obj = {};
        const merged1 = Object.assign(closure_11);
        obj[fromServer.id] = fromServer;
        closure_11 = obj;
      }
      let tmp6 = null != closure_13;
      if (tmp6) {
        tmp6 = fromServer.type === constants2.GUILD;
      }
      if (tmp6) {
        obj = { activeSubscriptions: closure_13, record: fromServer };
        closure_13 = getUpdatedActiveSubscriptions(obj);
      }
      let tmp11 = null != closure_14;
      if (tmp11) {
        tmp11 = fromServer.type === constants2.APPLICATION;
      }
      if (tmp11) {
        const obj1 = { activeSubscriptions: closure_14, record: fromServer };
        closure_13 = getUpdatedActiveSubscriptions(obj1);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function handleMostRecentSubscriptionFetchStart() {
    let closure_20 = true;
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function handleMostRecentSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let closure_15 = true;
    let closure_20 = false;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        closure_15 = false;
      } else {
        let closure_12 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function handleMostRecentSubscriptionFetchFail() {
    let closure_20 = false;
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function handlePreviousSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let closure_17 = true;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        closure_17 = false;
      } else {
        let closure_16 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_SUBSCRIPTION_RESET: reset,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function handleSubscriptionRewardEligibilityFetchStart() {
    let closure_18 = true;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function handleSubscriptionRewardEligibilityFetch(eligible) {
    eligible = eligible.eligible;
    let closure_18 = false;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function handleSubscriptionRewardEligibilityFetchFailed(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_19 = false;
      let closure_18 = false;
    }
  },
  LOGOUT: reset
});
const obj = {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    let obj = {};
    let closure_0 = obj;
    obj = {};
    let closure_1 = obj;
    const items = [];
    let closure_2 = items;
    const items1 = [];
    let closure_3 = items1;
    const id = store.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === closure_4) {
        const fromServer = closure_6.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (callback(fromServer)) {
          obj[fromServer.id] = fromServer;
          let tmp3 = fromServer.type === constants2.GUILD;
          if (tmp3) {
            tmp3 = fromServer.status !== constants.ENDED;
          }
          if (tmp3) {
            items.push(fromServer);
          }
          let tmp8 = fromServer.type === constants2.APPLICATION;
          if (tmp8) {
            tmp8 = fromServer.status !== constants.ENDED;
          }
          if (tmp8) {
            items1.push(fromServer);
          }
        }
      }
    });
    let closure_10 = obj;
    let closure_11 = obj;
    let closure_13 = items;
    let closure_14 = items1;
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    subscription = subscription.subscription;
    if (subscription.user_id === store.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      let obj = {};
      const merged = Object.assign(closure_10);
      obj[fromServer.id] = fromServer;
      closure_10 = obj;
      if (isPaid(fromServer)) {
        obj = {};
        const merged1 = Object.assign(closure_11);
        obj[fromServer.id] = fromServer;
        closure_11 = obj;
      }
      let tmp6 = null != closure_13;
      if (tmp6) {
        tmp6 = fromServer.type === constants2.GUILD;
      }
      if (tmp6) {
        obj = { activeSubscriptions: closure_13, record: fromServer };
        closure_13 = getUpdatedActiveSubscriptions(obj);
      }
      let tmp11 = null != closure_14;
      if (tmp11) {
        tmp11 = fromServer.type === constants2.APPLICATION;
      }
      if (tmp11) {
        const obj1 = { activeSubscriptions: closure_14, record: fromServer };
        closure_13 = getUpdatedActiveSubscriptions(obj1);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function handleMostRecentSubscriptionFetchStart() {
    let closure_20 = true;
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function handleMostRecentSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let closure_15 = true;
    let closure_20 = false;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        closure_15 = false;
      } else {
        let closure_12 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function handleMostRecentSubscriptionFetchFail() {
    let closure_20 = false;
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function handlePreviousSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let closure_17 = true;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        closure_17 = false;
      } else {
        let closure_16 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_SUBSCRIPTION_RESET: reset,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function handleSubscriptionRewardEligibilityFetchStart() {
    let closure_18 = true;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function handleSubscriptionRewardEligibilityFetch(eligible) {
    eligible = eligible.eligible;
    let closure_18 = false;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function handleSubscriptionRewardEligibilityFetchFailed(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_19 = false;
      let closure_18 = false;
    }
  },
  LOGOUT: reset
};
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/billing/SubscriptionStore.tsx");

export default tmp3;
export { getSubscriptionOfType };
