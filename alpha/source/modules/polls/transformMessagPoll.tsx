// Module ID: 5101
// Function ID: 5102
// Name: transformMessagPoll
// Dependencies: [4348, 2]
// Exports: default

// Module 5101 (transformMessagPoll)
import _modDef4348 from "module_4348" /* 4348 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4348(expiry.expiry);
  return obj;
};
