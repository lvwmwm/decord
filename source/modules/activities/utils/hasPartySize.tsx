// Module ID: 11073
// Function ID: 11074
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11073 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
