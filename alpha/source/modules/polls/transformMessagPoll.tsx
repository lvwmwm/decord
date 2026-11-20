// Module ID: 6264
// Function ID: 6265
// Name: transformMessagPoll
// Dependencies: [2167, 2]
// Exports: default

// Module 6264 (transformMessagPoll)
import _modDef2167 from "module_2167" /* 2167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2167(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
