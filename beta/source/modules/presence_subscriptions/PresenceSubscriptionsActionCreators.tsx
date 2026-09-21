// Module ID: 11599
// Function ID: 11600
// Name: PresenceSubscriptionsActionCreators
// Dependencies: [577, 2]
// Exports: subscribe

// Module 11599 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  DispatcherDefault.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription });
};
