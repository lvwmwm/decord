// Module ID: 4587
// Function ID: 4588
// Name: transformMessagePoll
// Dependencies: [3837, 2]
// Exports: default

// Module 4587 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3837)(expiry.expiry);
  return obj;
};
