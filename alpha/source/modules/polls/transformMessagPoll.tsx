// Module ID: 5188
// Function ID: 5189
// Name: transformMessagPoll
// Dependencies: [4418, 2]
// Exports: default

// Module 5188 (transformMessagPoll)
import _modDef4418 from "module_4418" /* 4418 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4418(expiry.expiry);
  return obj;
};
