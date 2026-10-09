// Module ID: 10634
// Function ID: 10635
// Name: PresenceSubscriptionsActionCreators
// Dependencies: [584, 2]
// Exports: subscribe

// Module 10634 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj2);
};
