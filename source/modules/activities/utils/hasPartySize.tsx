// Module ID: 11688
// Function ID: 11689
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11688 (hasPartySize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
