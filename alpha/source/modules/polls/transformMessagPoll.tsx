// Module ID: 6471
// Function ID: 6472
// Name: transformMessagPoll
// Dependencies: [2049, 2]
// Exports: default

// Module 6471 (transformMessagPoll)
import _modDef2049 from "module_2049" /* 2049 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2049(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
