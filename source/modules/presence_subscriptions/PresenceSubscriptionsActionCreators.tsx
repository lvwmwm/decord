// Module ID: 11295
// Function ID: 11296
// Name: subscribe
// Dependencies: [706, 2]
// Exports: subscribe

// Module 11295 (subscribe)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = dispatcherDefault;
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
