// Module ID: 12525
// Function ID: 96192
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12525 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function dismissUntilStorageKey(PREMIUM_TIER_0_TRIAL_ENDING) {
  return closure_13[PREMIUM_TIER_0_TRIAL_ENDING] + "-untilAtLeast";
}
function clearDismissUntil(closure_11) {
  const Storage = arg1(dependencyMap[8]).Storage;
  Storage.remove(dismissUntilStorageKey(closure_11));
}
function dismissNotice(closure_11, untilAtLeast) {
  if (null != closure_11) {
    if (null != closure_13[closure_11]) {
      const Storage = untilAtLeast(dependencyMap[8]).Storage;
      const result = Storage.set(tmp12, true);
    }
    if (null != untilAtLeast) {
      if (null != tmp12) {
        const Storage2 = untilAtLeast(dependencyMap[8]).Storage;
        const result1 = Storage2.set(dismissUntilStorageKey(closure_11), untilAtLeast.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
        const tmp9 = dismissUntilStorageKey(closure_11);
      }
    }
    clearDismissUntil(closure_11);
  }
}
function isNoticeDismissed(PREMIUM_TIER_0_TRIAL_ENDING) {
  if (null == PREMIUM_TIER_0_TRIAL_ENDING) {
    return false;
  } else {
    if (null != closure_13[PREMIUM_TIER_0_TRIAL_ENDING]) {
      const Storage = arg1(dependencyMap[8]).Storage;
      let value = Storage.get(dismissUntilStorageKey(PREMIUM_TIER_0_TRIAL_ENDING));
      let tmp5 = null;
      if (null != value) {
        tmp5 = importDefault(dependencyMap[9])(value);
      }
      if (null != tmp5) {
        return tmp5.isAfter(importDefault(dependencyMap[9])());
      }
    }
    let tmp8 = null != tmp16;
    if (tmp8) {
      tmp8 = "" !== tmp16;
    }
    if (tmp8) {
      const Storage2 = arg1(dependencyMap[8]).Storage;
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
  let closure_11 = null;
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
            closure_11 = value;
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
    closure_11 = value;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const PremiumSubscriptionSKUs = arg1(dependencyMap[6]).PremiumSubscriptionSKUs;
const NoticeTypes = arg1(dependencyMap[7]).NoticeTypes;
let closure_11 = null;
const items = [, ];
({ PREMIUM_TIER_2_TRIAL_ENDING: arr[0], PREMIUM_TIER_0_TRIAL_ENDING: arr[1] } = NoticeTypes);
let closure_13 = { [NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: "hidePremiumTier0TrialEndingReminder", [NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialEndingReminder" };
let tmp2 = (Store) => {
  class NoticeStore {
    constructor() {
      self = this;
      tmp = closure_3(this, NoticeStore);
      obj = closure_6(NoticeStore);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = NoticeStore;
  callback2(NoticeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_8];
      this.syncWith(items, closure_21);
      this.waitFor(closure_8);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getNoticeType",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  return callback(NoticeStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "NoticeStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
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
        let tmp2 = closure_13;
        let tmp3 = closure_13[value];
        if (null != tmp3) {
          let tmp4 = closure_0;
          let tmp5 = closure_2;
          let Storage = closure_0(closure_2[8]).Storage;
          let removeResult = Storage.remove(tmp3);
        }
        let tmp7 = closure_18;
        let tmp8 = closure_18(value);
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    let closure_11 = null;
  },
  NOTICE_DISMISS: function handleNoticeDismiss(untilAtLeast) {
    if (null != closure_11) {
      dismissNotice(closure_11, untilAtLeast.untilAtLeast);
      updateNotice();
    }
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/NoticeStore.tsx");

export default tmp2;
