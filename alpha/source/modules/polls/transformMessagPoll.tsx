// Module ID: 6486
// Function ID: 6487
// Name: transformMessagPoll
// Dependencies: [2046, 2]
// Exports: default

// Module 6486 (transformMessagPoll)
import _modDef2046 from "module_2046" /* 2046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2046(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
