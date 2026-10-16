// Module ID: 5964
// Function ID: 5965
// Name: transformMessagPoll
// Dependencies: [4761, 2]
// Exports: default

// Module 5964 (transformMessagPoll)
import _modDef4761 from "module_4761" /* 4761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4761(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
