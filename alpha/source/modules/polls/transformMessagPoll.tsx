// Module ID: 5743
// Function ID: 5744
// Name: transformMessagPoll
// Dependencies: [4661, 2]
// Exports: default

// Module 5743 (transformMessagPoll)
import _modDef4661 from "module_4661" /* 4661 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4661(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
