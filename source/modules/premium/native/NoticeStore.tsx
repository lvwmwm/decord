// Module ID: 12697
// Function ID: 98719
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 6688, 1851, 653, 587, 3712, 566, 686, 2]

// Module 12697 (_isNativeReflectConstruct)
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { PremiumSubscriptionSKUs } from "GuildFeatures";
import { NoticeTypes } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function dismissUntilStorageKey(PREMIUM_TIER_0_TRIAL_ENDING) {
  return dependencyMap[PREMIUM_TIER_0_TRIAL_ENDING] + "-untilAtLeast";
}
function clearDismissUntil(value) {
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove(dismissUntilStorageKey(value));
}
function dismissNotice(c11, untilAtLeast) {
  if (null != c11) {
    if (null != dependencyMap[c11]) {
      const Storage = require(587) /* Storage */.Storage;
      const result = Storage.set(tmp12, true);
    }
    if (null != untilAtLeast) {
      if (null != tmp12) {
        const Storage2 = require(587) /* Storage */.Storage;
        const result1 = Storage2.set(dismissUntilStorageKey(c11), untilAtLeast.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
        const tmp9 = dismissUntilStorageKey(c11);
      }
    }
    clearDismissUntil(c11);
  }
}
function isNoticeDismissed(PREMIUM_TIER_0_TRIAL_ENDING) {
  if (null == PREMIUM_TIER_0_TRIAL_ENDING) {
    return false;
  } else {
    if (null != dependencyMap[PREMIUM_TIER_0_TRIAL_ENDING]) {
      const Storage = require(587) /* Storage */.Storage;
      let value = Storage.get(dismissUntilStorageKey(PREMIUM_TIER_0_TRIAL_ENDING));
      let tmp5 = null;
      if (null != value) {
        tmp5 = importDefault(3712)(value);
      }
      if (null != tmp5) {
        return tmp5.isAfter(importDefault(3712)());
      }
    }
    let tmp8 = null != tmp16;
    if (tmp8) {
      tmp8 = "" !== tmp16;
    }
    if (tmp8) {
      const Storage2 = require(587) /* Storage */.Storage;
      value = Storage2.get(tmp16);
      tmp8 = null != value && value;
      const tmp12 = null != value && value;
    }
    return tmp8;
  }
}
function updateNotice() {
  let items;
  let value;
  let c11 = null;
  const tmp = _createForOfIteratorHelperLoose(items);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      value = iter.value;
      let tmp2 = NoticeTypes;
      if (value === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING) {
        let tmp6 = store;
        let tmp7 = PremiumSubscriptionSKUs;
        items = [PremiumSubscriptionSKUs.TIER_2];
        if (store.getAlmostExpiringTrialOffersForReminder(items).length > 0) {
          let tmp8 = isNoticeDismissed;
          let tmp9 = NoticeTypes;
          if (!isNoticeDismissed(NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)) {
            c11 = value;
          }
        }
      } else {
        let tmp3 = NoticeTypes;
        if (value === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING) {
          let tmp10 = store;
          let tmp11 = PremiumSubscriptionSKUs;
          let items1 = [PremiumSubscriptionSKUs.TIER_0];
          if (store.getAlmostExpiringTrialOffersForReminder(items1).length > 0) {
            let tmp4 = isNoticeDismissed;
            let tmp5 = NoticeTypes;
            if (!isNoticeDismissed(NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)) {
              break;
            }
          }
        }
      }
      let iter2 = tmp();
      iter = iter2;
    }
    c11 = value;
  }
}
let c11 = null;
let items = [, ];
({ PREMIUM_TIER_2_TRIAL_ENDING: arr[0], PREMIUM_TIER_0_TRIAL_ENDING: arr[1] } = NoticeTypes);
let closure_13 = { [NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: "hidePremiumTier0TrialEndingReminder", [NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialEndingReminder" };
let tmp2 = ((Store) => {
  class NoticeStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, NoticeStore);
      obj = outer1_6(NoticeStore);
      tmp2 = outer1_5;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(NoticeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [outer1_8];
      this.syncWith(items, outer1_21);
      this.waitFor(outer1_8);
    }
  };
  let items = [obj, ];
  obj = {
    key: "getNoticeType",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  return callback(NoticeStore, items);
})(require("initialize").Store);
tmp2.displayName = "NoticeStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: updateNotice,
  CURRENT_USER_UPDATE: updateNotice,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: updateNotice,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: updateNotice,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: updateNotice,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: updateNotice,
  LOGOUT: function handleLogout() {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(items);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = dependencyMap;
        let tmp3 = dependencyMap[value];
        if (null != tmp3) {
          let tmp4 = require;
          let tmp5 = dependencyMap;
          let Storage = require(587) /* Storage */.Storage;
          let removeResult = Storage.remove(tmp3);
        }
        let tmp7 = clearDismissUntil;
        let tmp8 = clearDismissUntil(value);
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    let c11 = null;
  },
  NOTICE_DISMISS: function handleNoticeDismiss(untilAtLeast) {
    if (null != c11) {
      dismissNotice(c11, untilAtLeast.untilAtLeast);
      updateNotice();
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/native/NoticeStore.tsx");

export default tmp2;
