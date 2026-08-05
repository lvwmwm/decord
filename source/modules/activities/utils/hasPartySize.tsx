// Module ID: 11041
// Function ID: 11042
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11041 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
