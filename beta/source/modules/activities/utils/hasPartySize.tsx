// Module ID: 11256
// Function ID: 11257
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11256 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
