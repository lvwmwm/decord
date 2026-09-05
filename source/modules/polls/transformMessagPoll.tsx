// Module ID: 4896
// Function ID: 4897
// Name: transformMessagePoll
// Dependencies: [4153, 2]
// Exports: default

// Module 4896 (transformMessagePoll)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 4153 */;

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = hooksDefault(expiry.expiry);
  return obj;
};
