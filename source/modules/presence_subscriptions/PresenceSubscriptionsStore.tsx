// Module ID: 10443
// Function ID: 80595
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10443 (_isNativeReflectConstruct)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const INVITE_EXPIRATION_MS = arg1(dependencyMap[7]).INVITE_EXPIRATION_MS;
let closure_10 = {};
let closure_11 = {};
const delayedCall = new arg1(dependencyMap[9]).DelayedCall(3000, function flush() {
  let length;
  const items = [];
  const entries = Object.entries(closure_11);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = closure_7;
      let tmp2 = closure_7(entries[num], 2);
      let tmp3 = tmp2[1];
      let arr = items.push(tmp3);
      let tmp5 = closure_10;
      closure_10[tmp2[0]] = tmp3;
      let tmp6 = closure_11;
      delete r2[r9];
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  if (0 !== items.length) {
    importDefault(dependencyMap[8]).subscribeActivities(items);
    const obj = importDefault(dependencyMap[8]);
  }
});
let tmp3 = (Store) => {
  class PresenceSubscriptionsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PresenceSubscriptionsStore);
      obj = closure_5(PresenceSubscriptionsStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = PresenceSubscriptionsStore;
  callback2(PresenceSubscriptionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, ];
  obj = {
    key: "isSubscribed",
    value(arg0) {
      return callback4(arg0);
    }
  };
  items[1] = obj;
  return callback(PresenceSubscriptionsStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "PresenceSubscriptionsStore";
tmp3 = new tmp3(importDefault(dependencyMap[11]), {
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
        let tmp2 = closure_7;
        let tmp3 = closure_7(entries[num], 2);
        let first = tmp3[0];
        if (tmp3[1].expiresAt < timestamp) {
          let tmp5 = closure_10;
          delete r4[r14];
          flag = true;
        }
        num = num + 1;
        flag2 = flag;
      } while (num < entries.length);
    }
    const entries1 = Object.entries(closure_11);
    let flag3 = flag2;
    let num2 = 0;
    let tmp6 = flag2;
    if (0 < entries1.length) {
      do {
        let tmp7 = closure_7;
        let tmp8 = closure_7(entries1[num2], 2);
        let first1 = tmp8[0];
        if (tmp8[1].expiresAt < timestamp) {
          let tmp10 = closure_11;
          delete r4[r14];
          flag3 = true;
        }
        num2 = num2 + 1;
        tmp6 = flag3;
      } while (num2 < entries1.length);
    }
    ({ applicationId, partyId } = subscription);
    ({ userId, messageId, channelId, inviteTime } = subscription);
    if (_isSubscribed(subscription)) {
      return tmp6;
    } else {
      const _Date = Date;
      const sum = inviteTime + INVITE_EXPIRATION_MS;
      if (sum < Date.now()) {
        return tmp6;
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
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsStore.tsx");

export default tmp3;
