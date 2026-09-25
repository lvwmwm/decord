// Module ID: 10998
// Function ID: 10999
// Name: PresenceSubscriptionsActionCreators
// Dependencies: [573, 2]
// Exports: subscribe

// Module 10998 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  DispatcherDefault.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription });
};
