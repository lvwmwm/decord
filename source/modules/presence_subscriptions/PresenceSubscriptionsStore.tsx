// Module ID: 10454
// Function ID: 80658
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 4217, 4155, 10455, 4015, 566, 686, 2]

// Module 10454 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items3 from "items3";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_8 from "_isNativeReflectConstruct";
import { INVITE_EXPIRATION_MS } from "items3";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeSubscriptionId(applicationId, partyId) {
  return "" + applicationId + ":" + partyId;
}
function _isSubscribed(subscription) {
  const tmp = makeSubscriptionId(subscription.applicationId, subscription.partyId);
  let tmp2 = tmp in closure_10;
  if (!tmp2) {
    tmp2 = tmp in closure_11;
  }
  return tmp2;
}
function handleConnectionOpenOrResumed() {
  let closure_10 = {};
  let closure_11 = {};
}
let closure_10 = {};
let closure_11 = {};
const delayedCall = new require("_createForOfIteratorHelperLoose").DelayedCall(3000, function flush() {
  let length;
  const items = [];
  const entries = Object.entries(closure_11);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp3 = callback3;
      let tmp4 = callback3(entries[num], 2);
      let tmp5 = tmp4[1];
      let arr = items.push(tmp5);
      let tmp7 = closure_10;
      closure_10[tmp4[0]] = tmp5;
      let tmp8 = closure_11;
      delete tmp[tmp2];
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  if (0 !== items.length) {
    importDefault(10455).subscribeActivities(items);
    const obj = importDefault(10455);
  }
});
let tmp3 = ((Store) => {
  class PresenceSubscriptionsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PresenceSubscriptionsStore);
      obj = outer1_5(PresenceSubscriptionsStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
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
  callback2(PresenceSubscriptionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, ];
  obj = {
    key: "isSubscribed",
    value(arg0) {
      return outer1_15(arg0);
    }
  };
  items[1] = obj;
  return callback(PresenceSubscriptionsStore, items);
})(require("initialize").Store);
tmp3.displayName = "PresenceSubscriptionsStore";
tmp3 = new tmp3(require("dispatcher"), {
  PRESENCE_SUBSCRIPTIONS_ADD: function handleSubscriptionAdd(subscription) {
    let applicationId;
    let channelId;
    let inviteTime;
    let messageId;
    let partyId;
    let userId;
    subscription = subscription.subscription;
    const timestamp = Date.now();
    const entries = Object.entries(closure_10);
    let flag = false;
    let num = 0;
    let flag2 = false;
    if (0 < entries.length) {
      do {
        let tmp4 = callback3;
        let tmp5 = callback3(entries[num], 2);
        let first = tmp5[0];
        if (tmp5[1].expiresAt < timestamp) {
          let tmp7 = closure_10;
          delete tmp[tmp2];
          flag = true;
        }
        num = num + 1;
        flag2 = flag;
      } while (num < entries.length);
    }
    const entries1 = Object.entries(closure_11);
    let flag3 = flag2;
    let num2 = 0;
    let tmp8 = flag2;
    if (0 < entries1.length) {
      do {
        let tmp9 = callback3;
        let tmp10 = callback3(entries1[num2], 2);
        let first1 = tmp10[0];
        if (tmp10[1].expiresAt < timestamp) {
          let tmp12 = closure_11;
          delete tmp[tmp2];
          flag3 = true;
        }
        num2 = num2 + 1;
        tmp8 = flag3;
      } while (num2 < entries1.length);
    }
    ({ applicationId, partyId } = subscription);
    ({ userId, messageId, channelId, inviteTime } = subscription);
    if (_isSubscribed(subscription)) {
      return tmp8;
    } else {
      const _Date = Date;
      const sum = inviteTime + INVITE_EXPIRATION_MS;
      if (sum < Date.now()) {
        return tmp8;
      } else {
        const _Date2 = Date;
        const obj = { userId, applicationId, partyId, messageId, channelId, expiresAt: INVITE_EXPIRATION_MS + Date.now() };
        closure_11[makeSubscriptionId(applicationId, partyId)] = obj;
        delayedCall.delay();
        return true;
      }
    }
  },
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  LOGOUT: function handleLogout() {
    let closure_10 = {};
    let closure_11 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsStore.tsx");

export default tmp3;
