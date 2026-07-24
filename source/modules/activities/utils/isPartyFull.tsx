// Module ID: 10936
// Function ID: 84969
// Name: isPartyFull
// Dependencies: [2]
// Exports: isPartyFull

// Module 10936 (isPartyFull)
const result = require("set").fileFinishedImporting("modules/activities/utils/isPartyFull.tsx");

export const isPartyFull = function isPartyFull(partySize) {
  let maxPartySize;
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
