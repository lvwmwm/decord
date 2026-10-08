// Module ID: 5742
// Function ID: 5743
// Name: transformMessagPoll
// Dependencies: [4659, 2]
// Exports: default

// Module 5742 (transformMessagPoll)
import _modDef4659 from "module_4659" /* 4659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4659(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
