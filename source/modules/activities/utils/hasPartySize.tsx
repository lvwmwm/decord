// Module ID: 9387
// Function ID: 9388
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 9387 (hasPartySize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
