// Module ID: 12090
// Function ID: 12091
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 12090 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
