// Module ID: 6678
// Function ID: 51422
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 4294967295, 4294967295, 0, 0, 0]

// Module 6678 (_isNativeReflectConstruct)
import result from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_8 from "result";
import { NOOP_NULL } from "result";

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
function emitChanges() {
  return true;
}
function handleReferralTrialResolve(content) {
  set1.add(content);
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((arg0) => callback(arg0));
}
function resolveUserReferralTrialId(message) {
  let content = null;
  if (message.type === arg1(dependencyMap[9]).MessageTypes.PREMIUM_REFERRAL) {
    content = message.content;
  }
  const arg1 = content;
  if (null == content) {
    return false;
  } else {
    let hasItem = set2.has(content);
    if (!hasItem) {
      hasItem = set1.has(content);
    }
    if (!hasItem) {
      handleReferralTrialResolve(content);
      importDefault(dependencyMap[8]).wait(() => {
        const referralTrialOffer = content(closure_2[7]).resolveReferralTrialOffer(content);
        return referralTrialOffer.catch(closure_9);
      });
      const obj = importDefault(dependencyMap[8]);
    }
  }
}
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_10 = null;
const set = new Set();
const map = new Map();
let closure_13 = false;
const set1 = new Set();
const set2 = new Set();
const map1 = new Map();
let closure_17 = 0;
let closure_18 = null;
let closure_19 = [];
let closure_20 = false;
let closure_21 = 0;
let closure_22 = false;
let closure_23 = false;
let closure_24 = null;
let closure_25 = null;
let tmp7 = (Store) => {
  class ReferralTrialStore {
    constructor() {
      self = this;
      tmp = result(this, ReferralTrialStore);
      obj = closure_6(ReferralTrialStore);
      tmp2 = closure_5;
      if (closure_26()) {
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
  const arg1 = ReferralTrialStore;
  callback2(ReferralTrialStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
      const items = [closure_8];
      this.syncWith(items, closure_29);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "checkAndFetchReferralsRemaining",
    value() {
      let tmp = null == closure_10;
      if (tmp) {
        tmp = !closure_13;
      }
      if (tmp) {
        tmp = closure_17 < 6;
      }
      if (tmp) {
        let tmp5 = null == closure_18;
        if (!tmp5) {
          const _Date = Date;
          tmp5 = closure_18 < Date.now();
        }
        tmp = tmp5;
      }
      if (tmp) {
        const referralsRemaining = ReferralTrialStore(closure_2[7]).fetchReferralsRemaining();
        const obj = ReferralTrialStore(closure_2[7]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getReferralsRemaining",
    value() {
      let obj = arg0;
      const self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.bypassFetch;
      if (flag === undefined) {
        flag = false;
      }
      if (!flag) {
        const result = self.checkAndFetchReferralsRemaining();
      }
      return closure_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSentUserIds",
    value() {
      const result = this.checkAndFetchReferralsRemaining();
      return Array.from(closure_11.values());
    }
  };
  items[4] = {
    key: "isFetchingReferralsRemaining",
    value() {
      return closure_13;
    }
  };
  items[5] = {
    key: "getRelevantUserTrialOffer",
    value(arg0) {
      return closure_16.get(arg0);
    }
  };
  items[6] = {
    key: "isResolving",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[7] = {
    key: "getEligibleUsers",
    value() {
      return closure_19;
    }
  };
  items[8] = {
    key: "getFetchingEligibleUsers",
    value() {
      return closure_20;
    }
  };
  items[9] = {
    key: "getNextIndexOfEligibleUsers",
    value() {
      return closure_21;
    }
  };
  items[10] = {
    key: "getIsEligibleToSendReferrals",
    value() {
      return closure_22;
    }
  };
  items[11] = {
    key: "getHasEligibleFriends",
    value() {
      return closure_23;
    }
  };
  items[12] = {
    key: "getRefreshAt",
    value() {
      return closure_24;
    }
  };
  items[13] = {
    key: "getAllRelevantReferralTrialOffers",
    value() {
      return Array.from(closure_16.values());
    }
  };
  items[14] = {
    key: "getRecipientStatus",
    value() {
      return closure_12;
    }
  };
  items[15] = {
    key: "getReminderStateId",
    value() {
      return closure_25;
    }
  };
  return callback(ReferralTrialStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp7.displayName = "ReferralTrialStore";
tmp7 = new tmp7(importDefault(dependencyMap[8]), {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function handleReferralTrialOfferUpdate(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    const arg1 = userTrialOfferId;
    if (!closure_13) {
      const referralsRemaining = arg1(dependencyMap[7]).fetchReferralsRemaining();
      const obj = arg1(dependencyMap[7]);
    }
    if (!set1.has(userTrialOfferId)) {
      handleReferralTrialResolve(userTrialOfferId);
      importDefault(dependencyMap[8]).wait(() => {
        const referralTrialOffer = userTrialOfferId(closure_2[7]).resolveReferralTrialOffer(userTrialOfferId);
        return referralTrialOffer.catch(closure_9);
      });
      const obj2 = importDefault(dependencyMap[8]);
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function handleReferralsRemainingFetchStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_24 = null;
      let closure_13 = true;
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function handleReferralsRemainingFetchSuccess(has_eligible_friends) {
    let recipient_status;
    let refresh_at;
    let reminder_state_id;
    let closure_22 = true;
    has_eligible_friends = has_eligible_friends.has_eligible_friends;
    let closure_13 = false;
    const referrals_remaining = has_eligible_friends.referrals_remaining;
    ({ refresh_at, recipient_status, reminder_state_id } = has_eligible_friends);
    const set = new Set(has_eligible_friends.sent_user_ids);
    let closure_24 = refresh_at;
    let closure_25 = reminder_state_id;
    let closure_17 = 0;
    let closure_18 = null;
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function handleReferralsRemainingFetchFail(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_22 = false;
      let closure_23 = false;
      let closure_24 = null;
      let closure_13 = false;
      const sum = closure_17 + 1;
      closure_17 = sum;
      if (sum <= 3) {
        const _Math2 = Math;
        let result = 1000 * Math.pow(2, closure_17);
      } else {
        const _Math = Math;
        result = 8000 * Math.pow(4, closure_17 - 3);
      }
      const _Date = Date;
      const _Math3 = Math;
      const timestamp = Date.now();
      let closure_18 = timestamp + Math.min(300000, result);
    }
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function handleCreateReferralSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    const referralsRemaining = arg1(dependencyMap[7]).fetchReferralsRemaining();
    const result = map1.set(userTrialOffer.id, userTrialOffer);
    set.add(userTrialOffer.user_id);
  },
  CREATE_REFERRALS_SUCCESS: function handleCreateReferralsSuccess(userTrialOffers) {
    let done;
    const referralsRemaining = arg1(dependencyMap[7]).fetchReferralsRemaining();
    const tmp2 = _createForOfIteratorHelperLoose(userTrialOffers.userTrialOffers);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = closure_16;
        let result = closure_16.set(value.id, value);
        let tmp5 = closure_11;
        let addResult = closure_11.add(value.user_id);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  BILLING_REFERRAL_RESOLVE_SUCCESS: function handleReferralTrialResolveSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    if (null != userTrialOffer) {
      set1.delete(userTrialOffer.id);
      set2.add(userTrialOffer.id);
      const result = map1.set(userTrialOffer.id, userTrialOffer);
    }
  },
  BILLING_REFERRAL_RESOLVE_FAIL: function handleReferralTrialResolveFail(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    set1.delete(userTrialOfferId);
    set2.add(userTrialOfferId);
  },
  REFERRALS_FETCH_ELIGIBLE_USER_START: function handleReferralsFetchEligibleUsersStart() {
    let closure_20 = true;
  },
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function handleReferralsFetchEligibleUsersSuccess(arg0) {
    let closure_20 = false;
    ({ users: closure_19, nextIndex: closure_21 } = arg0);
  },
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function handleReferralsFetchEligibleUsersFail() {
    let closure_20 = false;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  MESSAGE_CREATE: function handleMessage(message) {
    resolveUserReferralTrialId(message.message);
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOGOUT: function handleReset() {
    let closure_10 = null;
    const set = new Set();
    let closure_13 = false;
    const set1 = new Set();
    const set2 = new Set();
    let map = new Map();
    let map1 = map;
    let closure_17 = 0;
    let closure_18 = null;
    let closure_19 = [];
    let closure_20 = false;
    let closure_21 = 0;
    let closure_22 = false;
    let closure_23 = false;
    let closure_24 = null;
    map1 = new Map();
    map = map1;
    let closure_25 = null;
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/ReferralTrialStore.tsx");

export default tmp7;
