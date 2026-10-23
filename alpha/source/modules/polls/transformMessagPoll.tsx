// Module ID: 6483
// Function ID: 6484
// Name: transformMessagPoll
// Dependencies: [2049, 2]
// Exports: default

// Module 6483 (transformMessagPoll)
import _modDef2049 from "module_2049" /* 2049 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2049(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
