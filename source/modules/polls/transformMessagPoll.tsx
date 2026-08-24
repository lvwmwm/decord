// Module ID: 4825
// Function ID: 4826
// Name: transformMessagePoll
// Dependencies: [3978, 2]
// Exports: default

// Module 4825 (transformMessagePoll)
import set from "set" /* 2 */;
import tDefault from "t" /* 3978 */;

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = tDefault(expiry.expiry);
  return obj;
};
