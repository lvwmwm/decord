// Module ID: 6383
// Function ID: 6384
// Name: transformMessagPoll
// Dependencies: [2168, 2]
// Exports: default

// Module 6383 (transformMessagPoll)
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2168(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
