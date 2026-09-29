// Module ID: 5132
// Function ID: 5133
// Name: transformMessagPoll
// Dependencies: [4380, 2]
// Exports: default

// Module 5132 (transformMessagPoll)
import _modDef4380 from "module_4380" /* 4380 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4380(expiry.expiry);
  return obj;
};
