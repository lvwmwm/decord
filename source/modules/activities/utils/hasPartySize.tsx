// Module ID: 9448
// Function ID: 9449
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 9448 (hasPartySize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
