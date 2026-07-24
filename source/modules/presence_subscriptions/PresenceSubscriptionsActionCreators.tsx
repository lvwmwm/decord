// Module ID: 10485
// Function ID: 80881
// Name: subscribe
// Dependencies: [686, 2]
// Exports: subscribe

// Module 10485 (subscribe)
const result = require("set").fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = importDefault(686);
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
