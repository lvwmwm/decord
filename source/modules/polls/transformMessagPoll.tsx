// Module ID: 4817
// Function ID: 4818
// Name: transformMessagePoll
// Dependencies: [4045, 2]
// Exports: default

// Module 4817 (transformMessagePoll)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 4045 */;

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = hooksDefault(expiry.expiry);
  return obj;
};
