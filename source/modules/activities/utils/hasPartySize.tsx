// Module ID: 11315
// Function ID: 11316
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11315 (hasPartySize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
