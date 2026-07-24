// Module ID: 6689
// Function ID: 51544
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 653, 6690, 686, 663, 566, 2]

// Module 6689 (_isNativeReflectConstruct)
import ME from "ME";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NOOP_NULL } from "ME";
import set from "_possibleConstructorReturn";

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
function emitChanges() {
  return true;
}
function handleReferralTrialResolve(content) {
  set1.add(content);
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((arg0) => outer1_31(arg0));
}
function resolveUserReferralTrialId(message) {
  let content = null;
  if (message.type === content(663).MessageTypes.PREMIUM_REFERRAL) {
    content = message.content;
  }
  if (null == content) {
    return false;
  } else {
    let hasItem = set2.has(content);
    if (!hasItem) {
      hasItem = set1.has(content);
    }
    if (!hasItem) {
      handleReferralTrialResolve(content);
      importDefault(686).wait(() => {
        const referralTrialOffer = content(outer1_2[7]).resolveReferralTrialOffer(content);
        return referralTrialOffer.catch(outer1_9);
      });
      const obj = importDefault(686);
    }
  }
}
let c10 = null;
let set = new Set();
let map = new Map();
let c13 = false;
let set1 = new Set();
let set2 = new Set();
let map1 = new Map();
let c17 = 0;
let c18 = null;
let closure_19 = [];
let c20 = false;
let c21 = 0;
let c22 = false;
let c23 = false;
let c24 = null;
let c25 = null;
let tmp7 = ((Store) => {
  class ReferralTrialStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ReferralTrialStore);
      obj = outer1_6(ReferralTrialStore);
      tmp2 = outer1_5;
      if (outer1_26()) {
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
  callback2(ReferralTrialStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
      const items = [outer1_8];
      this.syncWith(items, outer1_29);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "checkAndFetchReferralsRemaining",
    value() {
      let tmp = null == outer1_10;
      if (tmp) {
        tmp = !outer1_13;
      }
      if (tmp) {
        tmp = outer1_17 < 6;
      }
      if (tmp) {
        let tmp5 = null == outer1_18;
        if (!tmp5) {
          const _Date = Date;
          tmp5 = outer1_18 < Date.now();
        }
        tmp = tmp5;
      }
      if (tmp) {
        const referralsRemaining = ReferralTrialStore(outer1_2[7]).fetchReferralsRemaining();
        const obj = ReferralTrialStore(outer1_2[7]);
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
      return outer1_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSentUserIds",
    value() {
      const result = this.checkAndFetchReferralsRemaining();
      return Array.from(outer1_11.values());
    }
  };
  items[4] = {
    key: "isFetchingReferralsRemaining",
    value() {
      return outer1_13;
    }
  };
  items[5] = {
    key: "getRelevantUserTrialOffer",
    value(arg0) {
      return outer1_16.get(arg0);
    }
  };
  items[6] = {
    key: "isResolving",
    value(arg0) {
      return outer1_14.has(arg0);
    }
  };
  items[7] = {
    key: "getEligibleUsers",
    value() {
      return outer1_19;
    }
  };
  items[8] = {
    key: "getFetchingEligibleUsers",
    value() {
      return outer1_20;
    }
  };
  items[9] = {
    key: "getNextIndexOfEligibleUsers",
    value() {
      return outer1_21;
    }
  };
  items[10] = {
    key: "getIsEligibleToSendReferrals",
    value() {
      return outer1_22;
    }
  };
  items[11] = {
    key: "getHasEligibleFriends",
    value() {
      return outer1_23;
    }
  };
  items[12] = {
    key: "getRefreshAt",
    value() {
      return outer1_24;
    }
  };
  items[13] = {
    key: "getAllRelevantReferralTrialOffers",
    value() {
      return Array.from(outer1_16.values());
    }
  };
  items[14] = {
    key: "getRecipientStatus",
    value() {
      return outer1_12;
    }
  };
  items[15] = {
    key: "getReminderStateId",
    value() {
      return outer1_25;
    }
  };
  return callback(ReferralTrialStore, items);
})(require("initialize").Store);
tmp7.displayName = "ReferralTrialStore";
tmp7 = new tmp7(require("dispatcher"), {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function handleReferralTrialOfferUpdate(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    if (!c13) {
      const referralsRemaining = userTrialOfferId(6690).fetchReferralsRemaining();
      const obj = userTrialOfferId(6690);
    }
    if (!set1.has(userTrialOfferId)) {
      handleReferralTrialResolve(userTrialOfferId);
      importDefault(686).wait(() => {
        const referralTrialOffer = userTrialOfferId(outer1_2[7]).resolveReferralTrialOffer(userTrialOfferId);
        return referralTrialOffer.catch(outer1_9);
      });
      const obj2 = importDefault(686);
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function handleReferralsRemainingFetchStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c24 = null;
      let c13 = true;
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function handleReferralsRemainingFetchSuccess(has_eligible_friends) {
    let recipient_status;
    let refresh_at;
    let reminder_state_id;
    let c22 = true;
    has_eligible_friends = has_eligible_friends.has_eligible_friends;
    let c13 = false;
    const referrals_remaining = has_eligible_friends.referrals_remaining;
    ({ refresh_at, recipient_status, reminder_state_id } = has_eligible_friends);
    const set = new Set(has_eligible_friends.sent_user_ids);
    let c17 = 0;
    let c18 = null;
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function handleReferralsRemainingFetchFail(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c22 = false;
      let c23 = false;
      let c24 = null;
      let c13 = false;
      const sum = c17 + 1;
      c17 = sum;
      if (sum <= 3) {
        const _Math2 = Math;
        let result = 1000 * Math.pow(2, c17);
      } else {
        const _Math = Math;
        result = 8000 * Math.pow(4, c17 - 3);
      }
      const _Date = Date;
      const _Math3 = Math;
      const timestamp = Date.now();
      let closure_18 = timestamp + Math.min(300000, result);
    }
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function handleCreateReferralSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    const referralsRemaining = require(6690) /* _createForOfIteratorHelperLoose */.fetchReferralsRemaining();
    const result = map1.set(userTrialOffer.id, userTrialOffer);
    set.add(userTrialOffer.user_id);
  },
  CREATE_REFERRALS_SUCCESS: function handleCreateReferralsSuccess(userTrialOffers) {
    let done;
    const referralsRemaining = require(6690) /* _createForOfIteratorHelperLoose */.fetchReferralsRemaining();
    const tmp2 = _createForOfIteratorHelperLoose(userTrialOffers.userTrialOffers);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = map1;
        let result = map1.set(value.id, value);
        let tmp5 = set;
        let addResult = set.add(value.user_id);
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
    let c20 = true;
  },
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function handleReferralsFetchEligibleUsersSuccess(arg0) {
    let c21;
    let closure_19;
    let c20 = false;
    ({ users: closure_19, nextIndex: c21 } = arg0);
  },
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function handleReferralsFetchEligibleUsersFail() {
    let c20 = false;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  MESSAGE_CREATE: function handleMessage(message) {
    resolveUserReferralTrialId(message.message);
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOGOUT: function handleReset() {
    let c10 = null;
    const set = new Set();
    let c13 = false;
    const set1 = new Set();
    const set2 = new Set();
    const map = new Map();
    let c17 = 0;
    let c18 = null;
    let closure_19 = [];
    let c20 = false;
    let c21 = 0;
    let c22 = false;
    let c23 = false;
    let c24 = null;
    const map1 = new Map();
    let c25 = null;
  }
});
let result = set.fileFinishedImporting("modules/premium/ReferralTrialStore.tsx");

export default tmp7;
