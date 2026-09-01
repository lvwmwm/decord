// Module ID: 4849
// Function ID: 4850
// Name: transformMessagePoll
// Dependencies: [4075, 2]
// Exports: default

// Module 4849 (transformMessagePoll)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 4075 */;

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = hooksDefault(expiry.expiry);
  return obj;
};
