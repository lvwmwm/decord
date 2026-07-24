// Module ID: 4463
// Function ID: 39379
// Name: transformMessagePoll
// Dependencies: [3712, 2]
// Exports: default

// Module 4463 (transformMessagePoll)
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj["expiry"] = importDefault(3712)(expiry.expiry);
  return obj;
};
