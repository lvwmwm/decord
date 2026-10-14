// Module ID: 5751
// Function ID: 5752
// Name: transformMessagPoll
// Dependencies: [4704, 2]
// Exports: default

// Module 5751 (transformMessagPoll)
import _modDef4704 from "module_4704" /* 4704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4704(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
