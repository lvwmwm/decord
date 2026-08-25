// Module ID: 4737
// Function ID: 4738
// Name: transformMessagePoll
// Dependencies: [3979, 2]
// Exports: default

// Module 4737 (transformMessagePoll)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 3979 */;

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = hooksDefault(expiry.expiry);
  return obj;
};
