// Module ID: 10924
// Function ID: 84683
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 10924 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
