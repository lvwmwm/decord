// Module ID: 5102
// Function ID: 5103
// Name: transformMessagPoll
// Dependencies: [4352, 2]
// Exports: default

// Module 5102 (transformMessagPoll)
import _modDef4352 from "module_4352" /* 4352 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4352(expiry.expiry);
  return obj;
};
