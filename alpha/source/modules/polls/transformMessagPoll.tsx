// Module ID: 6544
// Function ID: 6545
// Name: transformMessagPoll
// Dependencies: [2047, 2]
// Exports: default

// Module 6544 (transformMessagPoll)
import _modDef2047 from "module_2047" /* 2047 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2047(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
