// Module ID: 5962
// Function ID: 5963
// Name: transformMessagPoll
// Dependencies: [4758, 2]
// Exports: default

// Module 5962 (transformMessagPoll)
import _modDef4758 from "module_4758" /* 4758 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4758(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
