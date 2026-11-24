// Module ID: 11820
// Function ID: 11821
// Name: PresenceSubscriptionsActionCreators
// Dependencies: [572, 2]
// Exports: subscribe

// Module 11820 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export function subscribe(subscription) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj2);
}
