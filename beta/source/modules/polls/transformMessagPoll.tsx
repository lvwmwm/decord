// Module ID: 5134
// Function ID: 5135
// Name: transformMessagPoll
// Dependencies: [4384, 2]
// Exports: default

// Module 5134 (transformMessagPoll)
import _modDef4384 from "module_4384" /* 4384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4384(expiry.expiry);
  return obj;
};
