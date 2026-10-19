// Module ID: 6002
// Function ID: 6003
// Name: transformMessagPoll
// Dependencies: [4797, 2]
// Exports: default

// Module 6002 (transformMessagPoll)
import _modDef4797 from "module_4797" /* 4797 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4797(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
