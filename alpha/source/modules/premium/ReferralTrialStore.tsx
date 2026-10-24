// Module ID: 7562
// Function ID: 7563
// Name: ReferralTrialStore
// Dependencies: [1392, 1087, 7563, 1103, 504, 584, 2]

// Module 7562 (ReferralTrialStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import MessageTypes from "MessageTypes" /* 1103 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 7563 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let closure_14;

function emitChanges() {
  return true;
}
function clearRecipientEligibility() {
  closure_14 = [];
  closure_15 = [];
  new Set();
}
function invalidateRecipientEligibility(userId) {
  let closure_0 = userId;
  set3.delete(userId);
  closure_14 = closure_14.filter((item) => item !== id);
  closure_15 = closure_15.filter((item) => item !== id);
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
let set3 = new Set();
const syncedClientThemes = [];
let closure_15 = [];
let c16 = false;
let c17 = false;
let refresh_at = null;
let reminder_state_id = null;
let recurring_reminder_state_id = null;
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
  getReferralsRemaining(arg0) {
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
    return set3;
  }
  isFetchingUserEligibility(arg0) {
    return closure_14.includes(arg0);
  }
  hasFetchedUserEligibility(arg0) {
    return closure_15.includes(arg0);
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
    let tmp = recurring_reminder_state_id;
    if (recurring_reminder_state_id == null) {
      tmp = reminder_state_id;
    }
    return tmp;
  }
  getRecurringReminderStateId() {
    return recurring_reminder_state_id;
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
    ({ refresh_at, recipient_status, reminder_state_id, recurring_reminder_state_id } = has_eligible_friends);
    new Set(has_eligible_friends.sent_user_ids);
    if (0 === referrals_remaining) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set();
      closure_14 = [];
      closure_15 = [];
    }
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
    let hasItem = set.has(userTrialOffer.userId);
    const obj = ReferralTrialActionCreators;
    const referralsRemaining = obj.fetchReferralsRemaining();
    const result = map.set(userTrialOffer.id, userTrialOffer);
    set.add(userTrialOffer.userId);
    const userId = userTrialOffer.userId;
    set3.delete(userId);
    closure_14 = closure_14.filter((item) => item !== id);
    closure_15 = closure_15.filter((item) => item !== id);
    if (!hasItem) {
      hasItem = null == c4;
    }
    if (!hasItem) {
      const _Math = Math;
      const bound = Math.max(0, c4 - 1);
      c4 = bound;
      if (0 === bound) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        closure_14 = [];
        closure_15 = [];
        set3 = set;
      }
    }
  },
  CREATE_REFERRALS_SUCCESS: function handleCreateReferralsSuccess(userTrialOffers) {
    userTrialOffers = userTrialOffers.userTrialOffers;
    const found = userTrialOffers.filter((userId) => !set.has(userId.userId));
    set = new Set(found.map((userId) => userId.userId));
    const obj = ReferralTrialActionCreators;
    const referralsRemaining = obj.fetchReferralsRemaining();
    const iter = userTrialOffers[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let result = map.set(nextResult.id, nextResult);
      let addResult = set.add(nextResult.userId);
      let tmp9 = invalidateRecipientEligibility(nextResult.userId);
      continue;
    }
    let tmp10 = null != c4;
    if (tmp10) {
      const _Math = Math;
      const bound = Math.max(0, c4 - set.size);
      c4 = bound;
      tmp10 = 0 === bound;
    }
    if (tmp10) {
      clearRecipientEligibility();
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
  REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_START: function handleRecipientEligibilityFetchStart(recipientIds) {
    recipientIds = recipientIds.recipientIds;
    for (const item10007 of recipientIds) {
      let tmp = item10007;
      if (!closure_14.includes(item10007)) {
        let arr = closure_14.push(tmp);
      }
      continue;
    }
  },
  REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_SUCCESS: function handleRecipientEligibilityFetchSuccess(recipientIds) {
    recipientIds = recipientIds.recipientIds;
    set = new Set(recipientIds.eligibleRecipientIds);
    const iter = recipientIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (!closure_15.includes(nextResult)) {
        let arr = closure_15.push(tmp2);
      }
      let hasItem = set.has(tmp2);
      if (hasItem) {
        hasItem = !set.has(tmp2);
      }
      if (hasItem) {
        hasItem = 0 !== c4;
      }
      if (hasItem) {
        let addResult = set3.add(tmp2);
      }
      continue;
    }
    closure_14 = closure_14.filter((item) => !recipientIds.includes(item));
  },
  REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_FAILURE: function handleRecipientEligibilityFetchFailure(recipientIds) {
    recipientIds = recipientIds.recipientIds;
    closure_14 = closure_14.filter((item) => !recipientIds.includes(item));
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const id = relationship.relationship.id;
    const hasItem = set3.has(id) || closure_14.includes(id) || closure_15.includes(id);
    let flag = hasItem;
    if (flag) {
      set3.delete(id);
      closure_14 = closure_14.filter((item) => item !== id);
      closure_15 = closure_15.filter((item) => item !== id);
      flag = true;
    }
    return flag;
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
    new Set();
    closure_14 = [];
    closure_15 = [];
    c16 = false;
    c17 = false;
    refresh_at = null;
    recipient_status = new Map();
    reminder_state_id = null;
    recurring_reminder_state_id = null;
    new Map();
  }
};
const referralTrialStore = new ReferralTrialStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/premium/ReferralTrialStore.tsx");

export default referralTrialStore;
