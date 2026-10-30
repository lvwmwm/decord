// Module ID: 6551
// Function ID: 6552
// Name: transformMessagPoll
// Dependencies: [2044, 2]
// Exports: default

// Module 6551 (transformMessagPoll)
import _modDef2044 from "module_2044" /* 2044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2044(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
