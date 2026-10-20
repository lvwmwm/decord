// Module ID: 6439
// Function ID: 6440
// Name: transformMessagPoll
// Dependencies: [2050, 2]
// Exports: default

// Module 6439 (transformMessagPoll)
import _modDef2050 from "module_2050" /* 2050 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2050(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
