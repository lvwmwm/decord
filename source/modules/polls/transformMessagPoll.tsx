// Module ID: 4586
// Function ID: 4587
// Name: transformMessagePoll
// Dependencies: [3837, 2]
// Exports: default

// Module 4586 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3837)(expiry.expiry);
  return obj;
};
