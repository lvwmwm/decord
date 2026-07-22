// Module ID: 6683
// Function ID: 51431
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6683 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleReset() {
  obj.userTrialOffers = {};
  obj.userDiscountOffers = {};
  obj.userOffersLastFetchedAtDate = undefined;
  obj.isFetching = false;
}
function emitChanges() {
  return true;
}
function rehydrateDiscountOffer(appliedAt) {
  if (appliedAt instanceof closure_8) {
    return appliedAt;
  } else {
    let obj = closure_8;
    if ("discount_id" in appliedAt) {
      let fromServer = obj.createFromServer(appliedAt);
    } else {
      obj = {};
      const merged = Object.assign(appliedAt);
      let date = null;
      if (null != appliedAt.appliedAt) {
        const _Date = Date;
        date = new Date(appliedAt.appliedAt);
      }
      obj["appliedAt"] = date;
      let date1 = null;
      if (null != appliedAt.deletedAt) {
        const _Date2 = Date;
        date1 = new Date(appliedAt.deletedAt);
      }
      obj["deletedAt"] = date1;
      let date2 = null;
      if (null != appliedAt.expiresAt) {
        const _Date3 = Date;
        date2 = new Date(appliedAt.expiresAt);
      }
      obj["expiresAt"] = date2;
      const prototype4 = obj.prototype;
      fromServer = new obj(obj);
    }
  }
}
function handleSubscriptionStoreUpdate() {
  const tmp = null != premiumTypeSubscription.getPremiumTypeSubscription();
  if (!tmp) {
    return tmp;
  } else {
    if (null != obj.userDiscountOffers[closure_14]) {
      let obj = {};
      obj[closure_14] = obj.userDiscountOffers[closure_14];
      obj.userDiscountOffers = obj;
      obj.userTrialOffers = {};
    } else if (null == obj.userDiscountOffers[closure_15]) {
      obj.userDiscountOffers = {};
    }
    obj = {};
    obj[closure_15] = obj.userDiscountOffers[closure_15];
    obj.userDiscountOffers = obj;
  }
}
function handlePaymentSourceChange() {
  const currentUser = currentUser.getCurrentUser();
}
function handleReferralTrialStoreUpdate() {
  return false;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
({ ANNUAL_DISCOUNT_IDS: closure_12, DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_13, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_15, SubscriptionPlanInfo: closure_16, SubscriptionTrials: closure_17, TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_18 } = arg1(dependencyMap[10]));
let obj = { userOffersLastFetchedAtDate: undefined, userTrialOffers: {}, userDiscountOffers: {}, userDiscounts: undefined, isFetching: false, lastFetchSuccessful: false };
let tmp3 = (PersistedStore) => {
  class UserOfferStore {
    constructor() {
      self = this;
      tmp = closure_2(this, UserOfferStore);
      obj = closure_5(UserOfferStore);
      tmp2 = closure_4;
      if (closure_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UserOfferStore;
  callback2(UserOfferStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(userDiscountOffers) {
      const self = this;
      if (null != userDiscountOffers) {
        const obj = {};
        const merged = Object.assign(userDiscountOffers);
        userDiscountOffers = userDiscountOffers.userDiscountOffers;
        if (null == userDiscountOffers) {
          userDiscountOffers = {};
        }
        const entries = Object.entries(userDiscountOffers);
        obj["userDiscountOffers"] = Object.fromEntries(entries.map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          const items = [tmp, callback(tmp2)];
          return items;
        }));
        let closure_20 = obj;
      } else {
        closure_20 = closure_19;
      }
      self.waitFor(closure_10, closure_7, closure_11, closure_9);
      const items = [closure_9];
      self.syncWith(items, closure_25);
      const items1 = [closure_11];
      self.syncWith(items1, closure_27);
      const items2 = [closure_7];
      self.syncWith(items2, closure_28);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getUserTrialOffer",
    value(arg0) {
      if (null !== arg0) {
        return closure_20.userTrialOffers[arg0];
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserDiscountOffer",
    value(arg0) {
      if (null !== arg0) {
        return closure_20.userDiscountOffers[arg0];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAnyOfUserTrialOfferId",
    value(arg0) {
      const tmp = callback3(arg0);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        const value = iter2.value;
        while (null == closure_20.userTrialOffers[value]) {
          let iter3 = tmp();
          iter2 = iter3;
        }
        return value;
      }
      return null;
    }
  };
  items[4] = {
    key: "isFetchingOffer",
    value() {
      const isFetching = closure_20.isFetching;
      return null != isFetching && isFetching;
    }
  };
  items[5] = {
    key: "hasFetchedOffer",
    value() {
      return null != closure_20.userOffersLastFetchedAtDate;
    }
  };
  items[6] = {
    key: "shouldFetchReferralOffer",
    value(arg0) {
      const userOffersLastFetchedAtDate = closure_20.userOffersLastFetchedAtDate;
      const isFetching = closure_20.isFetching;
      if (null == userOffersLastFetchedAtDate) {
        return !tmp;
      } else {
        const _Date = Date;
        let tmp3 = Date.now() - 600000 > userOffersLastFetchedAtDate;
        let tmp4 = !tmp;
        if (tmp4) {
          if (!tmp3) {
            let num2 = 0;
            if (null != arg0) {
              num2 = arg0;
            }
            tmp3 = num2 > userOffersLastFetchedAtDate;
          }
          tmp4 = tmp3;
        }
        return tmp4;
      }
    }
  };
  items[7] = {
    key: "shouldShowTrialOfferReminder",
    value(trial_id) {
      let result = !closure_18.includes(trial_id.trial_id);
      if (!result) {
        let obj = UserOfferStore(closure_1[11]);
        obj = { location: "user_offer_store" };
        result = obj.isPremiumOfferReminderExperimentEnabled(obj);
      }
      return result;
    }
  };
  items[8] = {
    key: "getAlmostExpiringTrialOffersForReminder",
    value(arg0) {
      const self = this;
      const UserOfferStore = this;
      let values = Object.values(closure_17);
      let closure_2 = values.map((id) => id.id);
      const currentUser = authStore.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      values = Object.values(closure_20.userTrialOffers);
      items = values.filter((trial_id) => {
        let hasItem = closure_2.includes(trial_id.trial_id);
        if (hasItem) {
          hasItem = null != trial_id.expires_at;
        }
        if (hasItem) {
          hasItem = null != trial_id.subscription_trial;
        }
        if (hasItem) {
          hasItem = trial_id.includes(trial_id.subscription_trial.sku_id);
        }
        if (hasItem) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(trial_id.expires_at);
          const timestamp = Date.now();
          hasItem = parsed < timestamp + self(trial_id[12]).getOfferNoticeThreshold(trial_id);
          const obj = self(trial_id[12]);
        }
        if (hasItem) {
          hasItem = self.shouldShowTrialOfferReminder(trial_id);
        }
        return hasItem;
      });
    }
  };
  items[9] = {
    key: "shouldShowDiscountOfferReminder",
    value(discountId) {
      let result = !closure_13.includes(discountId.discountId);
      if (!result) {
        let obj = UserOfferStore(closure_1[11]);
        obj = { location: "user_offer_store" };
        result = obj.isPremiumOfferReminderExperimentEnabled(obj);
      }
      return result;
    }
  };
  items[10] = {
    key: "getAlmostExpiringDiscountOffersForReminder",
    value(arg0) {
      const self = this;
      const UserOfferStore = this;
      const currentUser = authStore.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      const values = Object.values(closure_20.userDiscountOffers);
      items = values.filter((expiresAt) => {
        let someResult = null != expiresAt.expiresAt && null != expiresAt.discount;
        if (someResult) {
          const planIds = expiresAt.discount.planIds;
          someResult = planIds.some((arg0) => closure_1.includes(closure_16[arg0].skuId));
        }
        if (someResult) {
          expiresAt = expiresAt.expiresAt;
          const _Date = Date;
          const time = expiresAt.getTime();
          const timestamp = Date.now();
          someResult = time < timestamp + self(expiresAt[12]).getOfferNoticeThreshold(expiresAt);
          const obj = self(expiresAt[12]);
        }
        if (someResult) {
          someResult = self.shouldShowDiscountOfferReminder(expiresAt);
        }
        return someResult;
      });
    }
  };
  items[11] = {
    key: "getAcknowledgedOffers",
    value(arg0) {
      const self = this;
      const UserOfferStore = arg0;
      const currentUser = authStore.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      const values = Object.values(closure_20.userTrialOffers);
      items = values.filter((trial_id) => {
        let hasItem = trial_id.includes(trial_id.trial_id);
        if (hasItem) {
          hasItem = null != trial_id.expires_at;
        }
        return hasItem;
      });
    }
  };
  items[12] = {
    key: "getUnacknowledgedDiscountOffers",
    value() {
      const self = this;
      const currentUser = authStore.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      let userDiscountOffers = closure_20.userDiscountOffers;
      if (null == userDiscountOffers) {
        userDiscountOffers = {};
      }
      const values = Object.values(userDiscountOffers);
      items = values.filter((hasAcknowledged) => {
        let tmp = !hasAcknowledged.hasAcknowledged();
        if (tmp) {
          tmp = !closure_12.includes(hasAcknowledged.discountId);
        }
        return tmp;
      });
    }
  };
  items[13] = {
    key: "getUnacknowledgedOffers",
    value(arg0) {
      const self = this;
      const UserOfferStore = arg0;
      const currentUser = authStore.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      const values = Object.values(closure_20.userTrialOffers);
      items = values.filter((trial_id) => {
        let hasItem = trial_id.includes(trial_id.trial_id);
        if (hasItem) {
          hasItem = null == trial_id.expires_at;
        }
        return hasItem;
      });
    }
  };
  items[14] = {
    key: "hasAnyUnexpiredOffer",
    value() {
      const values = Object.values(closure_20.userTrialOffers);
      return values.some((expires_at) => {
        let tmp = null == expires_at.expires_at;
        if (!tmp) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(expires_at.expires_at);
          tmp = parsed > Date.now();
        }
        return tmp;
      });
    }
  };
  items[15] = {
    key: "hasAnyUnexpiredDiscountOffer",
    value() {
      const values = Object.values(closure_20.userDiscountOffers);
      return values.some((hasExpired) => !hasExpired.hasExpired());
    }
  };
  items[16] = {
    key: "canFractionalPremiumUserUseOffer",
    value() {
      let result = fractionalPremiumActive.isFractionalPremiumActive({ excludeReverseTrial: true });
      if (result) {
        result = null == premiumTypeSubscription.getPremiumTypeSubscription();
      }
      return result;
    }
  };
  items[17] = {
    key: "getReferrer",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let referrer;
        if (null != closure_20.userTrialOffers[arg0]) {
          referrer = tmp3.referrer;
        }
        tmp = referrer;
      }
      return tmp;
    }
  };
  items[18] = {
    key: "getState",
    value() {
      return closure_20;
    }
  };
  items[19] = {
    key: "forceReset",
    value() {
      callback5();
    }
  };
  items[20] = {
    key: "lastFetchSuccessful",
    value() {
      return closure_20.lastFetchSuccessful;
    }
  };
  return callback(UserOfferStore, items);
}(importDefault(dependencyMap[13]).PersistedStore);
tmp3.displayName = "UserOfferStore";
tmp3.persistKey = "UserOfferStore";
const items = [
  (userDiscounts) => {
    userDiscounts = undefined;
    if (null != userDiscounts) {
      userDiscounts = userDiscounts.userDiscounts;
    }
    if (null != userDiscounts) {
      const obj = {};
      const merged = Object.assign(userDiscounts);
      obj["userDiscountOffers"] = userDiscounts;
      return obj;
    }
  },
  (arg0) => {
    if (null != arg0) {
      const _Object = Object;
      return arg0;
    }
  },
  (isFetching) => {
    if (null != isFetching) {
      isFetching = undefined;
      if (null != isFetching) {
        isFetching = isFetching.isFetching;
      }
      let tmp2 = isFetching;
      if (null == isFetching) {
        const obj = {};
        const merged = Object.assign(isFetching);
        obj["isFetching"] = false;
        tmp2 = obj;
      }
      return tmp2;
    }
  },
  (userDiscountOffers) => {
    userDiscountOffers = undefined;
    if (null != userDiscountOffers) {
      userDiscountOffers = userDiscountOffers.userDiscountOffers;
    }
    if (null != userDiscountOffers) {
      const obj = {};
      const merged = Object.assign(userDiscountOffers);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(userDiscountOffers.userDiscountOffers);
      obj["userDiscountOffers"] = Object.fromEntries(entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, callback(tmp2)];
        return items;
      }));
      return obj;
    }
  }
];
tmp3.migrations = items;
obj = {
  BILLING_USER_OFFER_FETCH_START: function handleUserOfferFetchStart() {
    obj.isFetching = true;
  },
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserTrialOfferAcknowledgedSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trial_id] = userTrialOffer;
    } else {
      obj.userTrialOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function handleUserOfferFetchSuccess(arg0) {
    let userDiscountOffer;
    let userTrialOffer;
    ({ userTrialOffer, userDiscountOffer } = arg0);
    if (tmp) {
      handleReset();
    }
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trial_id] = userTrialOffer;
      obj.userDiscountOffers = {};
    } else if (null != userDiscountOffer) {
      obj.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
      obj.userTrialOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
    obj.isFetching = false;
    obj.lastFetchSuccessful = true;
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserOfferAcknowledgedSuccess(arg0) {
    let userDiscount;
    let userDiscountOffer;
    let userTrialOffer;
    ({ userTrialOffer, userDiscount, userDiscountOffer } = arg0);
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trial_id] = userTrialOffer;
    } else {
      obj.userTrialOffers = {};
    }
    if (null != userDiscount) {
      obj.userDiscountOffers[userDiscount.discountId] = userDiscount;
    } else if (null != userDiscountOffer) {
      obj.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
    } else {
      obj.userDiscountOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_FAIL: function handleUserOfferFetchFail() {
    handleReset();
    obj.userOffersLastFetchedAtDate = Date.now();
    obj.isFetching = false;
    obj.lastFetchSuccessful = false;
  },
  BILLING_USER_OFFER_REDEEMED: function handleUserOfferRedeemed(offerId) {
    const arg1 = offerId.offerId;
    const keys = Object.keys(obj.userDiscountOffers);
    if (null != keys.find((arg0) => closure_20.userDiscountOffers[arg0].id === offerId)) {
      const userDiscountOffers = obj.userDiscountOffers;
      delete r4[r5];
    }
    const keys1 = Object.keys(obj.userTrialOffers);
    if (null != keys1.find((arg0) => closure_20.userTrialOffers[arg0].id === offerId)) {
      const userTrialOffers = obj.userTrialOffers;
      delete r0[r1];
    }
    return true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: handlePaymentSourceChange,
  LOGOUT: handleReset
};
tmp3 = new tmp3(importDefault(dependencyMap[14]), obj);
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("stores/billing/UserOfferStore.tsx");

export default tmp3;
