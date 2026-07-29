// Module ID: 4521
// Function ID: 4522
// Name: transformMessagePoll
// Dependencies: [3771, 2]
// Exports: default

// Module 4521 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3771)(expiry.expiry);
  return obj;
};
