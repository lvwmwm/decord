// Module ID: 11387
// Function ID: 11388
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11387 (hasPartySize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
