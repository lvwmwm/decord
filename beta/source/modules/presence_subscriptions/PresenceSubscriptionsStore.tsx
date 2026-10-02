// Module ID: 10877
// Function ID: 10878
// Name: PresenceSubscriptionsStore
// Dependencies: [32, 4877, 2011, 10878, 2046, 504, 585, 2]

// Module 10877 (PresenceSubscriptionsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 2011 */;
import Timers from "Timers" /* 2046 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 10878 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import PresenceStore from "PresenceStore" /* 4877 */;
import size from "module_2" /* 2 */;

function handleConnectionOpenOrResumed() {
  closure_5 = {};
  closure_6 = {};
}
const INVITE_EXPIRATION_MS = Constants.INVITE_EXPIRATION_MS;
let closure_5 = {};
let closure_6 = {};
const delayedCall = new Timers.DelayedCall(3000, function flush() {
  let tmp6;
  let tmp7;
  const items = [];
  const entries = Object.entries(closure_6);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let arr = items.push(tmp7);
    closure_5[tmp6] = tmp7;
    delete closure_6[tmp6];
    continue;
  }
  if (0 !== items.length) {
    const obj = ActivitiesActionCreatorsDefault;
    obj.subscribeActivities(items);
  }
});
const Store = get_initializedDefault.Store;
class PresenceSubscriptionsStore extends Store {
  initialize() {
    this.waitFor(PresenceStore);
  }
  isSubscribed(applicationId) {
    const combined = "" + applicationId.applicationId + ":" + applicationId.partyId;
    return combined in closure_5 || combined in closure_6;
  }
}
const prototype = PresenceSubscriptionsStore.prototype;
PresenceSubscriptionsStore.displayName = "PresenceSubscriptionsStore";
let obj = {
  PRESENCE_SUBSCRIPTIONS_ADD: function handleSubscriptionAdd(subscription) {
    let applicationId;
    let channelId;
    let inviteTime;
    let messageId;
    let partyId;
    let userId;
    function prune() {
      let flag = false;
      const timestamp = Date.now();
      const entries = Object.entries(closure_1_5);
      const tmp3 = entries[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        if (tmp6[1].expiresAt < timestamp) {
          delete closure_1_5[tmp7];
          flag = true;
        }
        continue;
      }
      const entries1 = Object.entries(closure_1_6);
      for (const item10033 of entries1) {
        let tmp10 = _slicedToArray(item10033, 2);
        if (tmp10[1].expiresAt < timestamp) {
          delete closure_1_6[tmp11];
          flag = true;
        }
        continue;
      }
      return flag;
    }
    subscription = subscription.subscription;
    const tmp = prune();
    ({ applicationId, partyId } = subscription);
    ({ userId, messageId, channelId, inviteTime } = subscription);
    const combined = "" + subscription.applicationId + ":" + subscription.partyId;
    let tmp3 = combined in closure_5;
    if (!tmp3) {
      const tmp4 = closure_6;
      tmp3 = combined in closure_6;
    }
    if (tmp3) {
      return tmp;
    } else {
      const _Date = Date;
      let tmp5 = INVITE_EXPIRATION_MS;
      const sum = inviteTime + INVITE_EXPIRATION_MS;
      if (sum < Date.now()) {
        return tmp;
      } else {
        const _HermesInternal = HermesInternal;
        const _Date2 = Date;
        const combined1 = "" + applicationId + ":" + partyId;
        closure_6[combined1] = { userId, applicationId, partyId, messageId, channelId, expiresAt: tmp5 + Date.now() };
        let tmp9 = delayedCall;
        const obj = { userId, applicationId, partyId, messageId, channelId, expiresAt: tmp5 + Date.now() };
        delayedCall.delay();
        let flag = true;
        return true;
      }
    }
  },
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  LOGOUT: function handleLogout() {
    closure_5 = {};
    closure_6 = {};
  }
};
const presenceSubscriptionsStore = new PresenceSubscriptionsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsStore.tsx");

export default presenceSubscriptionsStore;
