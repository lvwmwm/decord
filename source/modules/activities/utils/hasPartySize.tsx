// Module ID: 9465
// Function ID: 9466
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 9465 (hasPartySize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
