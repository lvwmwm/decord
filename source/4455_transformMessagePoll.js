// Module ID: 4455
// Function ID: 39282
// Name: transformMessagePoll
// Dependencies: []
// Exports: default

// Module 4455 (transformMessagePoll)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj["expiry"] = importDefault(dependencyMap[0])(expiry.expiry);
  return obj;
};
