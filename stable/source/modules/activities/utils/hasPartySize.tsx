// Module ID: 12038
// Function ID: 12039
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 12038 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
