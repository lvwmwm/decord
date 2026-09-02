// Module ID: 9462
// Function ID: 9463
// Name: isPartyFull
// Dependencies: [2]
// Exports: isPartyFull

// Module 9462 (isPartyFull)
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
