// Module ID: 4498
// Function ID: 39505
// Name: transformMessagePoll
// Dependencies: [3747, 2]
// Exports: default

// Module 4498 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj["expiry"] = importDefault(3747)(expiry.expiry);
  return obj;
};
