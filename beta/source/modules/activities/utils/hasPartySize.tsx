// Module ID: 11920
// Function ID: 11921
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11920 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
