// Module ID: 11013
// Function ID: 11014
// Name: subscribe
// Dependencies: [709, 2]
// Exports: subscribe

// Module 11013 (subscribe)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = dispatcherDefault;
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
