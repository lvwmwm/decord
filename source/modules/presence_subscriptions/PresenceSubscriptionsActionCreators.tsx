// Module ID: 10338
// Function ID: 10339
// Name: subscribe
// Dependencies: [709, 2]
// Exports: subscribe

// Module 10338 (subscribe)
const result = require("set").fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = importDefault(709);
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
