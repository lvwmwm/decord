// Module ID: 10879
// Function ID: 10880
// Name: PresenceSubscriptionsActionCreators
// Dependencies: [585, 2]
// Exports: subscribe

// Module 10879 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj2);
};
