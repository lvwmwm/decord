// Module ID: 4464
// Function ID: 39390
// Name: transformMessagePoll
// Dependencies: [3713, 2]
// Exports: default

// Module 4464 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj["expiry"] = importDefault(3713)(expiry.expiry);
  return obj;
};
