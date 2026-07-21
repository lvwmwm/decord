// Module ID: 10898
// Function ID: 84718
// Name: isPartyFull
// Dependencies: []
// Exports: isPartyFull

// Module 10898 (isPartyFull)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/isPartyFull.tsx");

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
