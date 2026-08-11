// Module ID: 4635
// Function ID: 4636
// Name: transformMessagePoll
// Dependencies: [3902, 2]
// Exports: default

// Module 4635 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3902)(expiry.expiry);
  return obj;
};
