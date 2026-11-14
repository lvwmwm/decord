// Module ID: 6789
// Function ID: 6790
// Name: transformMessagPoll
// Dependencies: [2169, 2]
// Exports: default

// Module 6789 (transformMessagPoll)
import _modDef2169 from "module_2169" /* 2169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2169(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
