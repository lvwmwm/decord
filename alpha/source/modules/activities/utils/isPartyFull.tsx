// Module ID: 12846
// Function ID: 12847
// Name: isPartyFull
// Dependencies: [2]
// Exports: isPartyFull

// Module 12846 (isPartyFull)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isPartyFull.tsx");

export function isPartyFull(partySize) {
  let maxPartySize;
  ({ partySize, maxPartySize } = partySize);
  return partySize > -1 && maxPartySize > 0 && partySize >= maxPartySize;
}
