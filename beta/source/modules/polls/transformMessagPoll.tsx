// Module ID: 6612
// Function ID: 6613
// Name: transformMessagPoll
// Dependencies: [2166, 2]
// Exports: default

// Module 6612 (transformMessagPoll)
import _modDef2166 from "module_2166" /* 2166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2166(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
