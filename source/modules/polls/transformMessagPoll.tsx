// Module ID: 4459
// Function ID: 39346
// Name: transformMessagePoll
// Dependencies: []
// Exports: default

// Module 4459 (transformMessagePoll)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj["expiry"] = importDefault(dependencyMap[0])(expiry.expiry);
  return obj;
};
