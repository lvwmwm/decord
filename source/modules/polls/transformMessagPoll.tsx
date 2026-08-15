// Module ID: 4820
// Function ID: 4821
// Name: transformMessagePoll
// Dependencies: [3975, 2]
// Exports: default

// Module 4820 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3975)(expiry.expiry);
  return obj;
};
