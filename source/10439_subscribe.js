// Module ID: 10439
// Function ID: 80592
// Name: subscribe
// Dependencies: []
// Exports: subscribe

// Module 10439 (subscribe)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
