// Module ID: 11446
// Function ID: 11447
// Name: isPartyFull
// Dependencies: [2]
// Exports: isPartyFull

// Module 11446 (isPartyFull)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isPartyFull.tsx");

export function isPartyFull(partySize) {
  let maxPartySize;
  ({ partySize, maxPartySize } = partySize);
  return partySize > -1 && maxPartySize > 0 && partySize >= maxPartySize;
}
