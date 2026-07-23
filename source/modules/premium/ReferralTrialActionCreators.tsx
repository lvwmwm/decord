// Module ID: 6690
// Function ID: 51567
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 1857, 1906, 653, 507, 686, 1184, 6691, 2]
// Exports: createReferralTrial, createReferralTrials, fetchReferralEligibleUsers, fetchReferralsRemaining, resolveReferralTrialOffer

// Module 6690 (_createForOfIteratorHelperLoose)
import closure_3 from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
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
async function _fetchReferralEligibleUsers(arg0, arg1, arg2, arg3) {
  let obj = { index: arg0, searchQuery: arg1 };
  const json = JSON.stringify(obj);
  if (outer2_11.has(json)) {
    return outer2_11.get(json);
  } else {
    const HTTP = outer2_0(outer2_2[6]).HTTP;
    obj = { url: outer2_9.GET_REFERRAL_ELIGIBLE_USERS };
    obj = { index: arg0 };
    let num2 = 10;
    if (null != arg2) {
      num2 = arg2;
    }
    obj.limit = num2;
    obj.search_query = arg1;
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    const body = yield HTTP.post(obj).body;
    const users = body.users;
    const obj1 = { users: users.map((arg0) => new outer3_6(arg0)), nextIndex: body.next_index };
    const result = outer2_11.set(json, obj1);
    return obj1;
  }
}
async function _createReferralTrials(arg0, arg1) {
  const items = [];
  const map = new Map();
  let obj = map;
  const tmp2 = outer2_12(arg0);
  const iter = tmp2();
  let iter2 = iter;
  if (!iter.done) {
    const value = iter2.value;
    const HTTP = outer2_0(outer2_2[6]).HTTP;
    obj = { url: outer2_9.CREATE_REFERRAL(value), oldFormErrors: true, rejectWithError: true };
    while (true) {
      let body = yield tmp6(obj).body;
      let tmp9 = body;
      let tmp10 = null;
      if (null != body) {
        tmp10 = body;
      }
      if (null != tmp10) {
        let tmp12 = items;
        let tmp13 = tmp10;
        let arr = items.push(tmp11);
      }
      let tmp15 = map;
      let tmp16 = value;
      let tmp17 = outer2_10;
      let result = obj.set(value, outer2_10.SUCCESS);
      while (true) {
        let tmp19 = tmp2;
        let iter3 = tmp2();
        iter2 = iter3;
        if (!iter3.done) {
          break;
        } else {
          break label0;
        }
      }
    }
  }
  outer2_1(outer2_2[7]).dispatch({ type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: items });
  return map;
}
async function _createReferralTrial(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_9.CREATE_REFERRAL(arg0), oldFormErrors: true, rejectWithError: false };
  const body = yield HTTP.post(obj).body;
  let tmp = null;
  if (null != body) {
    tmp = body;
  }
  obj = { type: "BILLING_CREATE_REFERRAL_SUCCESS", userTrialOffer: tmp };
  outer2_1(outer2_2[7]).dispatch(obj);
  obj = { userTrialOffer: tmp };
  return obj;
}
async function _resolveReferralTrialOffer(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_9.REFERRAL_OFFER_ID_RESOLVE(arg0), oldFormErrors: true, rejectWithError: false };
  const body = yield HTTP.get(obj).body;
  let tmp = null;
  if (null != body) {
    tmp = body;
  }
  obj = { type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: tmp };
  outer2_1(outer2_2[7]).dispatch(obj);
  obj = { userTrialOffer: tmp };
  return obj;
}
({ AbortCodes: closure_8, Endpoints: closure_9 } = ME);
let obj = { SUCCESS: 1, [1]: "SUCCESS", FAIL: 2, [2]: "FAIL" };
let tmp3 = (() => {
  class EligibleUserCache {
    constructor() {
      tmp = outer1_4(this, EligibleUserCache);
      map = new Map();
      this.cache = map;
      this.expiration = Date.now() + 600000;
      return;
    }
  }
  let obj = {
    key: "set",
    value(arg0, arg1) {
      const cache = this.cache;
      const result = cache.set(arg0, arg1);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "get",
    value(arg0) {
      this._checkExpiration();
      const cache = this.cache;
      return cache.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "has",
    value(arg0) {
      this._checkExpiration();
      const cache = this.cache;
      return cache.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_checkExpiration",
    value() {
      if (this.expiration < Date.now()) {
        const cache = this.cache;
        cache.clear();
      }
    }
  };
  return callback2(EligibleUserCache, items);
})();
tmp3 = new tmp3();
let closure_11 = tmp3;
let result = require("_defineProperties").fileFinishedImporting("modules/premium/ReferralTrialActionCreators.tsx");

export const ReferralOfferStatus = { REDEEMED: 1, [1]: "REDEEMED", PENDING: 2, [2]: "PENDING", CONVERTED: 3, [3]: "CONVERTED" };
export const CreateReferralStatus = obj;
export const fetchReferralEligibleUsers = function fetchReferralEligibleUsers(arg0, outer2_0, arg2) {
  return _fetchReferralEligibleUsers(...arguments);
};
export const fetchReferralsRemaining = function fetchReferralsRemaining() {
  let obj = importDefault(686);
  obj.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" });
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: constants.GET_REFERRALS_REMAINING, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((body) => {
    const map = new Map();
    if (null != body.body) {
      if (null != body.body.recipient_status) {
        for (const key10015 in arg0.body.recipient_status) {
          let tmp7 = key10015;
          let result = map.set(key10015, arg0.body.recipient_status[key10015]);
          continue;
        }
      }
    }
    const obj = { type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS" };
    let num = 0;
    if (null != body.body) {
      num = 0;
      if (null != body.body.referrals_remaining) {
        num = body.body.referrals_remaining;
      }
    }
    obj.referrals_remaining = num;
    if (null != body.body) {
      if (null != body.body.sent_user_ids) {
        const sent_user_ids = body.body.sent_user_ids;
      }
      obj.sent_user_ids = [];
      body = body.body;
      let refresh_at;
      if (null != body) {
        refresh_at = body.refresh_at;
      }
      let tmp2 = null;
      if (null != refresh_at) {
        tmp2 = refresh_at;
      }
      obj.refresh_at = tmp2;
      obj.recipient_status = map;
      const body2 = body.body;
      let has_eligible_friends;
      if (null != body2) {
        has_eligible_friends = body2.has_eligible_friends;
      }
      obj.has_eligible_friends = null != has_eligible_friends && has_eligible_friends;
      const body3 = body.body;
      let reminder_state_id;
      if (null != body3) {
        reminder_state_id = body3.reminder_state_id;
      }
      let tmp5 = null;
      if (null != reminder_state_id) {
        tmp5 = reminder_state_id;
      }
      obj.reminder_state_id = tmp5;
      obj2.dispatch(obj);
    }
  }, (status) => {
    status = undefined;
    if (null != status) {
      status = status.status;
    }
    if (404 !== status) {
      let obj = outer1_1(outer1_2[7]);
      obj = { type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" };
      obj.dispatch(obj);
    }
  });
};
export const createReferralTrials = function createReferralTrials(arg0) {
  return _createReferralTrials(...arguments);
};
export const createReferralTrial = function createReferralTrial() {
  return _createReferralTrial(...arguments);
};
export const resolveReferralTrialOffer = function resolveReferralTrialOffer(content) {
  return _resolveReferralTrialOffer(...arguments);
};
