// Module ID: 5746
// Function ID: 5747
// Name: transformMessagPoll
// Dependencies: [4702, 2]
// Exports: default

// Module 5746 (transformMessagPoll)
import _modDef4702 from "module_4702" /* 4702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4702(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
