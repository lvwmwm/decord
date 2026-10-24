// Module ID: 11210
// Function ID: 11211
// Name: PresenceSubscriptionsActionCreators
// Dependencies: [584, 2]
// Exports: subscribe

// Module 11210 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj2);
};
