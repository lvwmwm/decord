// Module ID: 4616
// Function ID: 4617
// Name: transformMessagePoll
// Dependencies: [3867, 2]
// Exports: default

// Module 4616 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3867)(expiry.expiry);
  return obj;
};
