// Module ID: 4676
// Function ID: 4677
// Name: transformMessagePoll
// Dependencies: [3943, 2]
// Exports: default

// Module 4676 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3943)(expiry.expiry);
  return obj;
};
