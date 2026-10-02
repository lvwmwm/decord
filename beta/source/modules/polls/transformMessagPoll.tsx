// Module ID: 5196
// Function ID: 5197
// Name: transformMessagPoll
// Dependencies: [4424, 2]
// Exports: default

// Module 5196 (transformMessagPoll)
import _modDef4424 from "module_4424" /* 4424 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4424(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
