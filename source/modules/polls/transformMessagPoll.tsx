// Module ID: 4633
// Function ID: 4634
// Name: transformMessagePoll
// Dependencies: [3883, 2]
// Exports: default

// Module 4633 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3883)(expiry.expiry);
  return obj;
};
