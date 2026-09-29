// Module ID: 5361
// Function ID: 5362
// Name: transformMessagPoll
// Dependencies: [4421, 2]
// Exports: default

// Module 5361 (transformMessagPoll)
import _modDef4421 from "module_4421" /* 4421 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4421(expiry.expiry);
  return obj;
};
