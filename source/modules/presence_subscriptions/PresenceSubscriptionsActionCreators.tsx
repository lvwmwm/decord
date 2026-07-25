// Module ID: 10419
// Function ID: 80550
// Name: subscribe
// Dependencies: [686, 2]
// Exports: subscribe

// Module 10419 (subscribe)
const result = require("set").fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = importDefault(686);
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
