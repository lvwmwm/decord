// Module ID: 6557
// Function ID: 6558
// Name: transformMessagPoll
// Dependencies: [2042, 2]
// Exports: default

// Module 6557 (transformMessagPoll)
import _modDef2042 from "module_2042" /* 2042 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2042(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
