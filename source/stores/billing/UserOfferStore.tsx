// Module ID: 6688
// Function ID: 51463
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 6689, 7112, 1849, 6637, 3782, 1851, 7113, 3776, 566, 686, 2]

// Module 6688 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
      obj = {};
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
  currentUser = currentUser.getCurrentUser();
}
function handleReferralTrialStoreUpdate() {
  return false;
}
({ ANNUAL_DISCOUNT_IDS: closure_12, DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_13, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_15, SubscriptionPlanInfo: closure_16, SubscriptionTrials: closure_17, TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_18 } = GuildFeatures);
let obj = { userOffersLastFetchedAtDate: undefined, userTrialOffers: {}, userDiscountOffers: {}, userDiscounts: undefined, isFetching: false, lastFetchSuccessful: false };
let tmp3 = ((PersistedStore) => {
  class UserOfferStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, UserOfferStore);
      obj = outer1_5(UserOfferStore);
      tmp2 = outer1_4;
      if (outer1_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
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
          const items = [tmp, outer2_26(tmp2)];
          return items;
        }));
        let outer1_20 = obj;
      } else {
        outer1_20 = outer1_19;
      }
      self.waitFor(outer1_10, outer1_7, outer1_11, outer1_9);
      let items = [outer1_9];
      self.syncWith(items, outer1_25);
      const items1 = [outer1_11];
      self.syncWith(items1, outer1_27);
      const items2 = [outer1_7];
      self.syncWith(items2, outer1_28);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getUserTrialOffer",
    value(arg0) {
      if (null !== arg0) {
        return outer1_20.userTrialOffers[arg0];
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserDiscountOffer",
    value(arg0) {
      if (null !== arg0) {
        return outer1_20.userDiscountOffers[arg0];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAnyOfUserTrialOfferId",
    value(arg0) {
      const tmp = outer1_21(arg0);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        const value = iter2.value;
        while (null == outer1_20.userTrialOffers[value]) {
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
      const isFetching = outer1_20.isFetching;
      return null != isFetching && isFetching;
    }
  };
  items[5] = {
    key: "hasFetchedOffer",
    value() {
      return null != outer1_20.userOffersLastFetchedAtDate;
    }
  };
  items[6] = {
    key: "shouldFetchReferralOffer",
    value(arg0) {
      const userOffersLastFetchedAtDate = outer1_20.userOffersLastFetchedAtDate;
      const isFetching = outer1_20.isFetching;
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
      let result = !outer1_18.includes(trial_id.trial_id);
      if (!result) {
        let obj = UserOfferStore(outer1_1[11]);
        obj = { location: "user_offer_store" };
        result = obj.isPremiumOfferReminderExperimentEnabled(obj);
      }
      return result;
    }
  };
  items[8] = {
    key: "getAlmostExpiringTrialOffersForReminder",
    value(arg0) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      let values = Object.values(outer1_17);
      let _isNativeReflectConstruct = values.map((id) => id.id);
      const currentUser = outer1_9.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      values = Object.values(outer1_20.userTrialOffers);
      items = values.filter((trial_id) => {
        let hasItem = _isNativeReflectConstruct.includes(trial_id.trial_id);
        if (hasItem) {
          hasItem = null != trial_id.expires_at;
        }
        if (hasItem) {
          hasItem = null != trial_id.subscription_trial;
        }
        if (hasItem) {
          hasItem = closure_1.includes(trial_id.subscription_trial.sku_id);
        }
        if (hasItem) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(trial_id.expires_at);
          const timestamp = Date.now();
          hasItem = parsed < timestamp + UserOfferStore(outer2_1[12]).getOfferNoticeThreshold(trial_id);
          const obj = UserOfferStore(outer2_1[12]);
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
      let result = !outer1_13.includes(discountId.discountId);
      if (!result) {
        let obj = UserOfferStore(outer1_1[11]);
        obj = { location: "user_offer_store" };
        result = obj.isPremiumOfferReminderExperimentEnabled(obj);
      }
      return result;
    }
  };
  items[10] = {
    key: "getAlmostExpiringDiscountOffersForReminder",
    value(arg0) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      const currentUser = outer1_9.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      const values = Object.values(outer1_20.userDiscountOffers);
      items = values.filter((expiresAt) => {
        let someResult = null != expiresAt.expiresAt && null != expiresAt.discount;
        if (someResult) {
          const planIds = expiresAt.discount.planIds;
          someResult = planIds.some((arg0) => outer1_1.includes(outer3_16[arg0].skuId));
        }
        if (someResult) {
          expiresAt = expiresAt.expiresAt;
          const _Date = Date;
          const time = expiresAt.getTime();
          const timestamp = Date.now();
          someResult = time < timestamp + UserOfferStore(outer2_1[12]).getOfferNoticeThreshold(expiresAt);
          const obj = UserOfferStore(outer2_1[12]);
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
      let closure_0 = arg0;
      const currentUser = outer1_9.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      const values = Object.values(outer1_20.userTrialOffers);
      items = values.filter((trial_id) => {
        let hasItem = closure_0.includes(trial_id.trial_id);
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
      const currentUser = outer1_9.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      let userDiscountOffers = outer1_20.userDiscountOffers;
      if (null == userDiscountOffers) {
        userDiscountOffers = {};
      }
      const values = Object.values(userDiscountOffers);
      items = values.filter((hasAcknowledged) => {
        let tmp = !hasAcknowledged.hasAcknowledged();
        if (tmp) {
          tmp = !outer2_12.includes(hasAcknowledged.discountId);
        }
        return tmp;
      });
    }
  };
  items[13] = {
    key: "getUnacknowledgedOffers",
    value(arg0) {
      const self = this;
      let closure_0 = arg0;
      const currentUser = outer1_9.getCurrentUser();
      if (obj.isPremium(currentUser)) {
        if (!self.canFractionalPremiumUserUseOffer()) {
          let items = [];
        }
        return items;
      }
      const values = Object.values(outer1_20.userTrialOffers);
      items = values.filter((trial_id) => {
        let hasItem = closure_0.includes(trial_id.trial_id);
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
      const values = Object.values(outer1_20.userTrialOffers);
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
      const values = Object.values(outer1_20.userDiscountOffers);
      return values.some((hasExpired) => !hasExpired.hasExpired());
    }
  };
  items[16] = {
    key: "canFractionalPremiumUserUseOffer",
    value() {
      let result = outer1_10.isFractionalPremiumActive({ excludeReverseTrial: true });
      if (result) {
        result = null == outer1_11.getPremiumTypeSubscription();
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
        if (null != outer1_20.userTrialOffers[arg0]) {
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
      return outer1_20;
    }
  };
  items[19] = {
    key: "forceReset",
    value() {
      outer1_24();
    }
  };
  items[20] = {
    key: "lastFetchSuccessful",
    value() {
      return outer1_20.lastFetchSuccessful;
    }
  };
  return callback(UserOfferStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "UserOfferStore";
tmp3.persistKey = "UserOfferStore";
let items = [
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
        const items = [tmp, outer1_26(tmp2)];
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
    offerId = offerId.offerId;
    const keys = Object.keys(obj.userDiscountOffers);
    if (null != keys.find((arg0) => outer1_20.userDiscountOffers[arg0].id === offerId)) {
      const userDiscountOffers = obj.userDiscountOffers;
      delete tmp3[tmp4];
    }
    const keys1 = Object.keys(obj.userTrialOffers);
    if (null != keys1.find((arg0) => outer1_20.userTrialOffers[arg0].id === offerId)) {
      const userTrialOffers = obj.userTrialOffers;
      delete tmp[tmp2];
    }
    return true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: handlePaymentSourceChange,
  LOGOUT: handleReset
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/billing/UserOfferStore.tsx");

export default tmp3;
