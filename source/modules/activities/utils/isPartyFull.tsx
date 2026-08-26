// Module ID: 11388
// Function ID: 11389
// Name: isPartyFull
// Dependencies: [2]
// Exports: isPartyFull

// Module 11388 (isPartyFull)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/isPartyFull.tsx");

export const isPartyFull = function isPartyFull(partySize) {
  ({ partySize, maxPartySize } = partySize);
  let tmp = partySize > -1;
  if (tmp) {
    tmp = maxPartySize > 0;
  }
  if (tmp) {
    tmp = partySize >= maxPartySize;
  }
  return tmp;
};
