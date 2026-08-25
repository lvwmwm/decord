// Module ID: 10523
// Function ID: 10524
// Name: subscribe
// Dependencies: [709, 2]
// Exports: subscribe

// Module 10523 (subscribe)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = dispatcherDefault;
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
