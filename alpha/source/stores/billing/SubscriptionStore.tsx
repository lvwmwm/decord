// Module ID: 2177
// Function ID: 2178
// Name: SubscriptionStore
// Dependencies: [1387, 2169, 2178, 502, 1071, 504, 572, 2]
// Exports: getSubscriptionOfType

// Module 2177 (SubscriptionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 2169 */;
import SubscriptionRecord2 from "SubscriptionRecord" /* 2178 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1387 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let set;

let closure_4;
let hasOwnProperty;
function reset() {
  closure_8 = null;
  items3 = null;
  let c10 = null;
  c11 = false;
  closure_12 = null;
  c13 = false;
  c14 = false;
  c16 = false;
  c17 = null;
}
const isNoneSubscription = SubscriptionPlanRecord.isNoneSubscription;
const SubscriptionRecord = SubscriptionRecord2.SubscriptionRecord;
({ SubscriptionStatusTypes: closure_4, SubscriptionTypes: hasOwnProperty } = Constants);
let obj = null;
let obj2 = null;
let closure_8 = null;
let items3 = null;
let c10 = null;
let c11 = false;
let closure_12 = null;
let c13 = false;
let c14 = false;
let c15 = null;
let c16 = false;
let c17 = null;
const Store = get_initializedDefault.Store;
class SubscriptionStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, OverridePremiumTypeStore);
  }
  hasFetchedSubscriptions() {
    return null != obj;
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
    return c11;
  }
  hasFetchedPreviousPremiumTypeSubscription() {
    return c13;
  }
  getPremiumSubscription(arg0) {
    let tmp4;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const PREMIUM = hasOwnProperty.PREMIUM;
    const tmp2 = hasOwnProperty;
    if (flag === undefined) {
      flag = true;
    }
    if (PREMIUM !== tmp2.PREMIUM) {
      const tmp5 = flag ? obj2 : obj;
      tmp4 = null;
      if (null != tmp5) {
        tmp4 = null;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp4 = null;
          while (keys[tmp] !== undefined) {
            let tmp14 = tmp5[tmp9];
            tmp4 = null;
            if (tmp14.userId !== AuthenticationStore.getId()) {
              break;
            } else {
              if (tmp14.type !== PREMIUM) {
                continue;
              } else {
                let tmp11 = isNoneSubscription(tmp14.planId);
                let tmp12 = !tmp11;
                tmp4 = tmp14;
                if (!tmp11) {
                  break;
                }
              }
              continue;
            }
          }
        }
      }
    } else {
      tmp4 = null;
    }
    return tmp4;
  }
  getPremiumTypeSubscription(arg0) {
    let tmp4;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const PREMIUM = hasOwnProperty.PREMIUM;
    const tmp2 = hasOwnProperty;
    if (flag === undefined) {
      flag = true;
    }
    if (PREMIUM !== tmp2.PREMIUM) {
      const tmp5 = flag ? obj2 : obj;
      tmp4 = null;
      if (null != tmp5) {
        tmp4 = null;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp4 = null;
          while (keys[tmp] !== undefined) {
            let tmp11 = tmp5[tmp9];
            tmp4 = null;
            if (tmp11.userId !== AuthenticationStore.getId()) {
              break;
            } else {
              tmp4 = tmp11;
              if (tmp11.type === PREMIUM) {
                break;
              }
            }
          }
        }
      }
    } else {
      tmp4 = null;
    }
    return tmp4;
  }
  getSubscriptions(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return flag ? obj2 : obj;
  }
  getSubscriptionById(subscription_id) {
    let tmp2;
    if (obj != null) {
      tmp2 = tmp[subscription_id];
    }
    return tmp2;
  }
  getActiveGuildSubscriptions() {
    return items3;
  }
  getActiveApplicationSubscriptions() {
    return c10;
  }
  getSubscriptionForPlanIds(items) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    set = new Set(items);
    const tmp2 = flag ? obj2 : obj;
    let tmp3 = null;
    if (null != tmp2) {
      const _Object = Object;
      const values = Object.values(tmp2);
      let found = values.find((items) => {
        items = items.items;
        return items.some((planId) => set.has(planId.planId));
      });
      if (found == null) {
        found = null;
      }
      tmp3 = found;
    }
    return tmp3;
  }
  getMostRecentPremiumTypeSubscription() {
    return closure_8;
  }
  getPreviousPremiumTypeSubscription() {
    return closure_12;
  }
  getIsSubscriptionEligibleForReward() {
    return c15;
  }
  getIsFetchingSubscriptionRewardEligibility() {
    return c14;
  }
  getIsFetchingMostRecentSubscription() {
    return c16;
  }
  getLastLazyPerkSync() {
    return c17;
  }
  getPremiumGroupSubscription() {
    let tmp3;
    const PREMIUM = hasOwnProperty.PREMIUM;
    if (PREMIUM !== hasOwnProperty.PREMIUM) {
      tmp3 = null;
      if (null != obj2) {
        tmp3 = null;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp3 = null;
          while (keys[tmp] !== undefined) {
            let tmp11 = tmp4[tmp8];
            tmp3 = null;
            if (tmp11.userId !== AuthenticationStore.getId()) {
              break;
            } else {
              if (tmp11.type !== PREMIUM) {
                continue;
              } else {
                let tmp9 = tmp11.hasAnyPremiumGroup && tmp11.statusAllowsPerks;
                tmp3 = tmp11;
                if (tmp9) {
                  break;
                }
              }
              continue;
            }
          }
        }
      }
    } else {
      tmp3 = null;
    }
    return tmp3;
  }
}
const prototype = SubscriptionStore.prototype;
SubscriptionStore.displayName = "SubscriptionStore";
obj = {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    obj = {};
    obj2 = {};
    const items = [];
    const items1 = [];
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
    const id = items1.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === constants) {
        const fromServer = SubscriptionRecord.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (fromServer.status !== constants.UNPAID) {
          obj2[fromServer.id] = fromServer;
          let tmp3 = fromServer.type === hasOwnProperty.GUILD;
          const tmp2 = hasOwnProperty;
          if (tmp3) {
            tmp3 = fromServer.status !== tmp12.ENDED;
          }
          if (tmp3) {
            items.push(fromServer);
          }
          const tmp6 = fromServer.type === tmp2.APPLICATION && fromServer.status !== constants.ENDED;
          if (tmp6) {
            items1.push(fromServer);
          }
        }
      }
    });
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    const f82975 = (id) => id.id === result.id;
    subscription = subscription.subscription;
    if (subscription.user_id === AuthenticationStore.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      let result = fromServer;
      if (undefined === fromServer.giftSubscription) {
        result = fromServer;
        if (null != tmp2) {
          result = fromServer.set("giftSubscription", tmp2.giftSubscription);
        }
      }
      obj = {};
      const merged = Object.assign(obj);
      obj[result.id] = result;
      if (result.status !== constants.UNPAID) {
        obj2 = {};
        const merged1 = Object.assign(obj2);
        obj2[result.id] = result;
      }
      const tmp12 = null != items3 && result.type === hasOwnProperty.GUILD;
      if (tmp12) {
        let tmp20;
        const findIndexResult = items3.findIndex(f82975);
        if (-1 === findIndexResult) {
          const items = [result];
          HermesBuiltin.arraySpread(items, items3, 1);
          tmp20 = items;
        } else {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, items3, 0);
          if (result.status !== constants.UNPAID) {
            if (result.status !== constants.ENDED) {
              items1[findIndexResult] = result;
              tmp20 = items1;
            }
          }
          items1.splice(findIndexResult, 1);
          tmp20 = items1;
        }
        items3 = tmp20;
      }
      const tmp25 = null != _null && result.type === hasOwnProperty.APPLICATION;
      if (tmp25) {
        let tmp33;
        const findIndexResult1 = _null.findIndex(f82975);
        if (-1 === findIndexResult1) {
          const items2 = [result];
          HermesBuiltin.arraySpread(items2, _null, 1);
          tmp33 = items2;
        } else {
          items3 = [];
          HermesBuiltin.arraySpread(items3, _null, 0);
          if (result.status !== constants.UNPAID) {
            if (result.status !== constants.ENDED) {
              items3[findIndexResult1] = result;
              tmp33 = items3;
            }
          }
          items3.splice(findIndexResult1, 1);
          tmp33 = items3;
        }
        items3 = tmp33;
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function handleMostRecentSubscriptionFetchStart() {
    c16 = true;
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function handleMostRecentSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    c11 = true;
    c16 = false;
    if (null != subscription) {
      if (subscription.user_id !== AuthenticationStore.getId()) {
        c11 = false;
      } else {
        closure_8 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function handleMostRecentSubscriptionFetchFail() {
    c16 = false;
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function handlePreviousSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    c13 = true;
    if (null != subscription) {
      if (subscription.user_id !== AuthenticationStore.getId()) {
        c13 = false;
      } else {
        closure_12 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_SUBSCRIPTION_RESET: reset,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function handleSubscriptionRewardEligibilityFetchStart() {
    c14 = true;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function handleSubscriptionRewardEligibilityFetch(eligible) {
    eligible = eligible.eligible;
    c14 = false;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function handleSubscriptionRewardEligibilityFetchFailed(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c15 = false;
      c14 = false;
    }
  },
  SET_PREMIUM_TYPE_OVERRIDE: function handlePremiumTypeOverride() {
    return true;
  },
  LOGOUT: reset
};
const subscriptionStore = new SubscriptionStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/billing/SubscriptionStore.tsx");

export default subscriptionStore;
export function getSubscriptionOfType(arg0, fn) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (arg0 === hasOwnProperty.PREMIUM) {
    if (null === OverridePremiumTypeStore.getPremiumTypeOverride()) {
      return null;
    }
  }
  const tmp3 = flag ? obj2 : obj;
  if (null == tmp3) {
    return null;
  } else {
    for (const key10014 in tmp3) {
      let tmp6 = tmp3[key10014];
      if (tmp6.userId !== AuthenticationStore.getId()) {
        return null;
      } else {
        if (tmp6.type !== arg0) {
          continue;
        } else {
          return tmp6;
        }
        continue;
      }
    }
    return null;
  }
}
