// Module ID: 11088
// Function ID: 11089
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11088 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
