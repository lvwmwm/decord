// Module ID: 7174
// Function ID: 7175
// Name: ReferralTrialStore
// Dependencies: [1390, 1085, 7175, 1101, 504, 584, 2]

// Module 7174 (ReferralTrialStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import MessageTypes from "MessageTypes" /* 1101 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 7175 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

function emitChanges() {
  return true;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((type) => {
    let content = null;
    const tmp = require;
    const tmp2 = dependencyMap;
    if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
      content = type.content;
    }
    if (null != content) {
      const hasItem = set2.has(content) || set.has(content);
      if (!hasItem) {
        set.add(content);
        const tmpResult = tmp(tmp2[2]);
        const referralTrialOffer = tmpResult.resolveReferralTrialOffer(content);
        referralTrialOffer.catch(NOOP_NULL);
      }
    }
    return false;
  });
}
const NOOP_NULL = Constants.NOOP_NULL;
let c4 = null;
let set = new Set();
let map = new Map();
let recipient_status = map;
let c7 = false;
const set1 = new Set();
const set2 = new Set();
const map1 = new Map();
map = map1;
let c11 = 0;
let c12 = null;
let closure_13 = [];
let c14 = false;
let c15 = 0;
let c16 = false;
let c17 = false;
let refresh_at = null;
let reminder_state_id = null;
const Store = get_initializedDefault.Store;
class ReferralTrialStore extends Store {
  initialize() {
    this.waitFor(UserStore);
    const items = [UserStore];
    this.syncWith(items, emitChanges);
  }
  checkAndFetchReferralsRemaining() {
    let tmp = null == c4 && !c7 && c11 < 6;
    if (tmp) {
      let tmp5 = null == c12;
      if (!tmp5) {
        const _Date = Date;
        tmp5 = tmp4 < Date.now();
      }
      tmp = tmp5;
    }
    if (tmp) {
      const obj = ReferralTrialActionCreators;
      const referralsRemaining = obj.fetchReferralsRemaining();
    }
  }
  getReferralsRemaining() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.bypassFetch;
    if (flag === undefined) {
      flag = false;
    }
    if (!flag) {
      const self = this;
      const result = this.checkAndFetchReferralsRemaining();
    }
    return c4;
  }
  getSentUserIds() {
    const result = this.checkAndFetchReferralsRemaining();
    return Array.from(set.values());
  }
  isFetchingReferralsRemaining() {
    return c7;
  }
  getRelevantUserTrialOffer(referralTrialOfferId) {
    return map.get(referralTrialOfferId);
  }
  isResolving(arg0) {
    return set1.has(arg0);
  }
  getEligibleUsers() {
    return closure_13;
  }
  getFetchingEligibleUsers() {
    return c14;
  }
  getNextIndexOfEligibleUsers() {
    return c15;
  }
  getIsEligibleToSendReferrals() {
    return c16;
  }
  getHasEligibleFriends() {
    return c17;
  }
  getRefreshAt() {
    return refresh_at;
  }
  getAllRelevantReferralTrialOffers() {
    return Array.from(map.values());
  }
  getRecipientStatus() {
    return recipient_status;
  }
  getReminderStateId() {
    return reminder_state_id;
  }
}
const prototype = ReferralTrialStore.prototype;
ReferralTrialStore.displayName = "ReferralTrialStore";
let obj = {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function handleReferralTrialOfferUpdate(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    const tmp = c7;
    if (!tmp) {
      const obj = ReferralTrialActionCreators;
      const referralsRemaining = obj.fetchReferralsRemaining();
    }
    if (!set1.has(userTrialOfferId)) {
      set1.add(userTrialOfferId);
      const obj2 = ReferralTrialActionCreators;
      const referralTrialOffer = obj2.resolveReferralTrialOffer(userTrialOfferId);
      referralTrialOffer.catch(NOOP_NULL);
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function handleReferralsRemainingFetchStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      refresh_at = null;
      c7 = true;
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function handleReferralsRemainingFetchSuccess(has_eligible_friends) {
    c16 = true;
    has_eligible_friends = has_eligible_friends.has_eligible_friends;
    c7 = false;
    const referrals_remaining = has_eligible_friends.referrals_remaining;
    ({ refresh_at, recipient_status, reminder_state_id } = has_eligible_friends);
    set = new Set(has_eligible_friends.sent_user_ids);
    c11 = 0;
    c12 = null;
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function handleReferralsRemainingFetchFail(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      let result;
      c16 = false;
      c17 = false;
      refresh_at = null;
      c7 = false;
      const sum = c11 + 1;
      c11 = sum;
      if (sum <= 3) {
        const _Math2 = Math;
        result = 1000 * Math.pow(2, c11);
      } else {
        const _Math = Math;
        result = 8000 * Math.pow(4, c11 - 3);
      }
      const _Date = Date;
      const _Math3 = Math;
      const timestamp = Date.now();
      c12 = timestamp + Math.min(300000, result);
    }
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function handleCreateReferralSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    const obj = ReferralTrialActionCreators;
    const referralsRemaining = obj.fetchReferralsRemaining();
    const result = map.set(userTrialOffer.id, userTrialOffer);
    set.add(userTrialOffer.userId);
  },
  CREATE_REFERRALS_SUCCESS: function handleCreateReferralsSuccess(userTrialOffers) {
    userTrialOffers = userTrialOffers.userTrialOffers;
    const obj = ReferralTrialActionCreators;
    const referralsRemaining = obj.fetchReferralsRemaining();
    for (const item10012 of userTrialOffers) {
      let result = map.set(item10012.id, item10012);
      let addResult = set.add(item10012.userId);
      continue;
    }
  },
  BILLING_REFERRAL_RESOLVE_SUCCESS: function handleReferralTrialResolveSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    if (null != userTrialOffer) {
      set1.delete(userTrialOffer.id);
      set2.add(userTrialOffer.id);
      const result = map.set(userTrialOffer.id, userTrialOffer);
    }
  },
  BILLING_REFERRAL_RESOLVE_FAIL: function handleReferralTrialResolveFail(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    set1.delete(userTrialOfferId);
    set2.add(userTrialOfferId);
  },
  REFERRALS_FETCH_ELIGIBLE_USER_START: function handleReferralsFetchEligibleUsersStart() {
    c14 = true;
  },
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function handleReferralsFetchEligibleUsersSuccess(arg0) {
    c14 = false;
    ({ users: closure_13, nextIndex: c15 } = arg0);
  },
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function handleReferralsFetchEligibleUsersFail() {
    c14 = false;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  MESSAGE_CREATE: function handleMessage(message) {
    message = message.message;
    let content = null;
    if (message.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
      content = message.content;
    }
    if (null != content) {
      const hasItem = set2.has(content) || set1.has(content);
      if (!hasItem) {
        set1.add(content);
        const tmpResult = ReferralTrialActionCreators;
        const referralTrialOffer = tmpResult.resolveReferralTrialOffer(content);
        referralTrialOffer.catch(NOOP_NULL);
      }
    }
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOGOUT: function handleReset() {
    c4 = null;
    new Set();
    c7 = false;
    new Set();
    new Set();
    new Map();
    c11 = 0;
    c12 = null;
    closure_13 = [];
    c14 = false;
    c15 = 0;
    c16 = false;
    c17 = false;
    refresh_at = null;
    recipient_status = new Map();
    reminder_state_id = null;
    new Map();
  }
};
const referralTrialStore = new ReferralTrialStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/premium/ReferralTrialStore.tsx");

export default referralTrialStore;
