// Module ID: 6692
// Function ID: 6693
// Name: transformMessagPoll
// Dependencies: [2171, 2]
// Exports: default

// Module 6692 (transformMessagPoll)
import _modDef2171 from "module_2171" /* 2171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef2171(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
